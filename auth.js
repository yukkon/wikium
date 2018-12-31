const crypto = require('crypto');

class Auth {
  static auth(session_id, callback){
    if (auth_result && auth_result != undefined && auth_result.session_id === session_id) {
      return callback();
    }

    db.get(`SELECT * FROM users WHERE session_id='${session_id}'`, (err, row) => {
      if (err) {
        return console.log(`Error select user: ${err.message}`);
      }

      if (row === undefined) {
        auth_result = null;
        return callback();
      }

      auth_result = {user: row, session_id: session_id};
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