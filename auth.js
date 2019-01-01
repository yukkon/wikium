const crypto = require('crypto');

class Auth {
  static auth(req, callback){
    if (req.session.auth_result) {
      return callback();
    }

    db.get(`SELECT * FROM users WHERE session_id='${session_id}'`, (err, row) => {
      if (err) {
        return console.log(`Error select user: ${err.message}`);
      }

      if (row === undefined) {
        req.session.auth_result = null;
        return callback();
      }

      req.session.auth_result = {user: row};
      callback();
    });
  }

  static makeSalt() {
    return crypto.randomBytes(10).toString('hex');
  }

  static encryptPassword(password, salt) {
    return crypto.createHmac('sha1', salt).update(password).digest('hex');
  }
}

module.exports = Auth;