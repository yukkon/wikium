var express = require('express');
var router = express.Router();

router.get('/v1/games/:game/settings', function(req, res) {
    console.log(`loading '${req.params.game}' settings`);
    let game = null;

    db.get(`SELECT * FROM games WHERE code='${req.params.game}'`, (err, row) => {
        if (err) {
            return console.log(`error select game: ${req.params.game} ${err.message}`);
        }

        if (row == undefined) {
            return console.log(`game '${req.params.game}' not found `);
        }

        game = row;
        console.log(row);

        if (!game) {
            res.json({"result":"error","message":`Game '${req.params.game}' does not exists`,"code":"404","locale":"ru"});
            return console.log(`Game '${req.params.game}' does not exists`);
        }
        let user_id = auth_result.user.id;
        db.run(`INSERT INTO sessions(game_id,user_id) VALUES(${game.id},${user_id})`, function(err) {
            if (err) {
                res.json({"result":"error","message":`Session for Game '${game.code}' was not created`,"code":"404","locale":"ru"});
                return console.log(`Session for Game '${game.code}' was not created: ${err.message}`);
            }
            game.session_id = this.lastID;
            console.log(`Session for game '${game.code}' and user '${user_id}' was created: ${game.session_id}`);

            let result = {"rights":{"allowDifficulties":true},"game_stats":{"rounds_count":0,"is_first_attempt":false},"editTranslationMode":false,"additionalParams":{"no_statistics":false,"apiVersion":"1","gameKey":`${game.code}`},"gameOverOn":{"seconds":60},"timing":{"secondsBeforeStart":3},"maxDifficulty":null,"gameKey":`${game.code}`,"bundleId":`${game.code}`,"title":`${game.title}`,"skill":"memory","user":{"id":user_id,"hasPremium":true},"is_test":false,"locale":"ru","session_id":game.session_id,"statisticsUrl":`/api/v1/games/statistic/${game.session_id}`};
            res.json(result);
        });
    });
});

router.post('/v1/games/:game', function(req, res) {
  console.log(`update '${req.body.session_id}' session for '${req.params.game}' game`);
  db.run(`UPDATE sessions SET accuracy = ${req.body.accuracy || 0}, reaction_time = ${req.body.reactionTime || 0}, score = ${req.body.score}, total_correct = ${req.body.totalCorrect}, total_incorrect = ${req.body.totalIncorrect}, completed_at = DATETIME('NOW', 'LOCALTIME') WHERE id = ${req.body.session_id}`, (err) => {
    if (err) {
        res.json({"result":"error","message":`Error while updating Session '${req.body.session_id}'`,"code":"404","locale":"ru"});
        return console.log(`Session '${req.body.session_id}' was not updated: ${err.message}`);
    }
    console.log(`Session '${req.body.session_id}' was updated`);
    res.json({"result":"success"});
  });
});

router.get('/v1/games/statistic/:session_id', function(req, res) {
  console.log(`load '${req.body.session_id}' statistics`);
  db.get(`SELECT * FROM sessions WHERE id='${req.params.session_id}'`, (err, row) => {
    if (err) {
      return console.log(`error select session: ${req.params.session_id} ${err.message}`);
    }

    if (row == undefined) {
      return console.log(`session '${req.params.session_id}' not found `);
    }

    if (row.user_id != req.session.user.id) {
      return res.json({"result":"error","message":`You can\`t read session of another user`,"code":"404","locale":"ru"});
    }

    var o = {id: row.id, user_id: row.user_id, score: row.score, reactionTime: row.reactionTime, totalCorrect: row.totalCorrect, totalIncorrect: row.totalIncorrect};
    //res.render('statistic', o);

    res.json({"gameLog":{"created_at":`${row.created_at}`,"id":row.id,"user_id":row.user_id,"game_id":row.game_id,"score":row.score,"train_id":null,"totalTime":60,"level":0,"bpi":0,"percentile":0,"challenge_id":null,"oc_lesson_part_id":null,"instant_bpi":0,"game_bpi":0,"game_num":"3","game_bpi_change":0,"rejected_at":null,"completed_at":`${row.completed_at}`,"raw_data":`{"gameOverOn":{"seconds":60},"reactionTime":${row.reaction_time},"usedTime":60,"timeLeft":0,"totalCorrect":${row.total_correct},"totalIncorrect":${row.total_incorrect}}`},"train":null,"topResults":[{"date":"2018-09-22T14:15:21+03:00","score":"3965"},{"date":"2018-09-11T07:54:50+03:00","score":"2910"},{"date":"2018-09-13T09:30:15+03:00","score":"2465"}],"prevResult":null,"lessonLastPart":false,"regularityFactor":0,"regularityBonus":0,"user":{"premium":true,"prof":true,"brain":true,"regin3days":true}});
    });
});

module.exports = router;
