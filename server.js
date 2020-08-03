const express = require('express');
const app = express();
const connectDB = require('./MongoConnect');
const mongoose = require('mongoose');
const Score = require('./models/ScoreSchema');

connectDB();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    Score.findByIdAndRemove('5f288a8fea47a00055835095', function(err, doc){
        console.log(doc + " something removed!!");
        Score.find(function (err, scores) {
            if (err) return console.error(err);
            console.log(scores.sort((a, b) => a.score - b.score));
        });
    });

});

const PORT = process.env.PORT || 2800;

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}...`);
});