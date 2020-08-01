const mongoose = require('mongoose');

const URI = "mongodb+srv://admin:pass@cluster0.if9qe.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("db connected!");
};

module.exports = connectDB;