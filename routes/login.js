var express = require('express');
var router = express.Router();
const Auth = require('../auth');

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
            console.log(`User '${req.body.name}' logged in successfully`);
            req.session.auth_result = {user: {id: row.id, user_name: row.user_name, created_at: row.created_at}};
            req.session.save();
            res.redirect('/games');
        } else {
            res.render(`login`, {error: 'Invalid user_name or password'});
        }
    });
});

module.exports = router;
