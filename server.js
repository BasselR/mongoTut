const express = require('express');
const app = express();
const connectDB = require('./MongoConnect');
const mongoose = require('mongoose');

connectDB();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    const kittySchema = new mongoose.Schema({
        name: String
    });

    const Kitten = mongoose.model('Kitten', kittySchema);

    const silence = new Kitten( {name: "Silence :)"} );
    console.log(silence.name);

    silence.save(function (err, fluffy) {
        if (err) return console.error(err);
        console.log("Silence has been saved to the DB :)");
    });
});

const PORT = process.env.PORT || 2800;

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}...`);
});