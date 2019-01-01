var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    if (req.url === '/login' || req.url === '/logout' || req.session.auth_result) {
        return next();
    } else {
        return res.redirect('/login');
    }
});

router.get('/', function(req, res) {
    res.redirect('/games');
});

module.exports = router;
