const fs = require("fs");

exports.render = (function () {
    const recur = function(obj, temps) {
        let result = '';
        let block_re = /{%\s*[^\/]*?\s*%}/; // {% foo %}
        let variable_re = /{{\s*.*?\s*}}/; // {{ foo }}
        let close_re = /{%\s*\/\s*%}/; // {% / %}

        while (temps.length > 0) {
            let current = temps.shift();

            if (block_re.test(current)) {
                let name = current.replace(/{%\s*(.*?)\s*%}/, '$1');
                let new_obj = obj[name];
                let new_obj_type = Object.prototype.toString.call(new_obj);
                let inner_block = [];
                let level = 1;

                while (temps.length > 0) {
                    let test_val = temps.shift();

                    if (close_re.test(test_val)) {
                        level -= 1;
                        if (level==0) {
                            break;
                        }
                        inner_block.push(test_val);
                    } else if (block_re.test(test_val)) {
                        inner_block.push(test_val);
                        level += 1;
                    } else {
                        inner_block.push(test_val);
                    }
                }

                if (new_obj_type=="[object Array]") {
                    new_obj.forEach(curr => { result += recur(curr, Array.from(inner_block));});
                } else if (new_obj_type=="[object Object]") {
                    result += recur(new_obj, Array.from(inner_block));
                }
            } else if (variable_re.test(current)) {
                let new_name = current.replace(/{{\s*(.*?)\s*}}/, '$1');
                const lens = (obj, path) => path.split(".").reduce((o, key) => key==='' ? o : o && o[key] ? o[key] : null, obj);
                result += lens(obj, new_name);
            } else {
                result += current;
            }
        }
        return result;
    };

    return function (filePath, options, callback) {
        fs.readFile(filePath, (err, content) => {
            if (err) return callback(new Error(err));
            let tpl = content.toString();

            let directives = tpl.match(/{[{%]\s*.*?\s*[}%]}/g) || [];
            let tags = tpl.split(/{[{%]\s*.*?\s*[}%]}/g);
            let arr = [];

            directives.forEach((currentValue, index, array) => {
                arr.push(tags[index]);
                arr.push(directives[index]);
            });
            arr.push(tags[tags.length-1]);

            let rendered = recur(options, arr);

            return callback(null, rendered);
        });
    };
})();