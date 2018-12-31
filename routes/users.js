var express = require('express');
var router = express.Router();
const Auth = require('../auth');

router.use((req, res, next) => {
  Auth.auth(req.sessionID, () => {
    if (auth_result && auth_result !== undefined) {
      return next();
    } else {
      return res.redirect('/login');
    }
  })
});

router.get('/', function(req, res) {
  res.send();
});

//new user
router.post('/', function(req, res) {
  let new_salt = Auth.makeSalt();
  let encrypted_password = Auth.encryptPassword(req.body.password, new_salt);
  let user_name = req.body.user_name.replace(/[^a-zA-Z0-9]/, '');
  db.run(`INSERT INTO users(name,encrypted_password,salt) VALUES(${user_name},${encrypted_password},${new_salt})`, function(err) {
    if (err) {
      res.json({"result":"error","message":`User '${user_name}' was not created`,"code":"404","locale":"ru"});
      return console.log(`User '${user_name}' was not created: ${err.message}`);
    }
    user_id = this.lastID;
    console.log(`User '${user_name}' with id '${user_id}' was created.`);

    res.json(result);
  });
});

//get user info
router.get('/:id', function(req, res) {
  if (auth_result.user.id != req.params.id){
    return res.redirect(`/users/${auth_result.user.id}`)
  }
  var o = {id: auth_result.user.id, user_name: auth_result.user.user_name, created_at: auth_result.user.created_at };
  res.render('user', o);
});

router.post('/:id', function(req, res) {
  //update user
});

module.exports = router;
