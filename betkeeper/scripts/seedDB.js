const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/betslips',
    {
        useNewUrlParse: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

const betslipSeed = [
    
];

db.Betslip
    .remove({})
    .then(() => db.Betslip.collection.insertMany(betslipSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });