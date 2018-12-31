var express = require('express');
var router = express.Router();
const Auth = require('../auth');

router.use((req, res, next) => {
    Auth.auth(req.sessionID, () => {
        if (auth_result && auth_result !== undefined) {
            return res.redirect('/game');
        } else {
            return next();
        }
    });
});

router.get('/', function(req, res) {
    res.render('login')
});

router.post('/', function(req, res) {
    db.get(`SELECT * FROM users WHERE user_name='${req.body.name}'`, (err, row) => {
        if (err) {
            return console.log(`error select user: ${game.code} ${err.message}`);
        }

        if (row === undefined) {
            return res.json({"result":"error","message":`User '${req.body.name}' does not exists`,"code":"404","locale":"ru"});
        }

        let enc_pass = Auth.encryptPassword(req.body.password, row.salt);
        if (enc_pass === row.encrypted_password){
            db.run(`UPDATE users SET session_id = '${req.sessionID}' WHERE id = ${row.id}`, (err) => {
                if (err) {
                    res.json({"result":"error","message":`Error while updating User`,"code":"404","locale":"ru"});
                    return console.log(`User '${row.id}' was not updated: ${err.message}`);
                }
                console.log(`User '${req.body.session_id}' was updated`);
                global.auth_result = {user: row, session_id: req.sessionID};
                req.session.auth_result = {user: row};
                res.redirect('/game');
            });

            //res.send(`result: ${enc_pass === row.encrypted_password}`);
        } else {
            //res.send(`result: ${}`);
        }
    });
});

module.exports = router;
