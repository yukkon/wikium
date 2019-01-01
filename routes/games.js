var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var types = [];
    db.all('select types.name as type_name, types.code as type_code, games.* from games join types on types.id=games.type_id order by types.id, games.id', (err, rows) => {
        if (err) { throw err; }
        let a = rows.groupBy('type_code');
        for (let type in a){ types.push({name: a[type][0].type_name, code:type, games: a[type], games_count: a[type].length}) }

        res.render('index', {groups: types});
    });
});

router.get('/:game', function(req, res) {
  console.log(`loading '${req.params.game}' game`);
  db.get(`SELECT * FROM games WHERE code='${req.params.game}'`, (err, row) => {
    if (err) {
        return console.log(`error select game: ${game.code} ${err.message}`);
    }

    if (row === undefined) {
        return res.json({"result":"error","message":`Game '${req.params.game}' does not exists`,"code":"404","locale":"ru"});
    }
    res.render(row.extended ? 'extended_game' : 'game', { game: row.code });
  });
});

module.exports = router;
