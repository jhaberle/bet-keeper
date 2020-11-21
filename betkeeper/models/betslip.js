const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betslipSchema = new Schema({
    team1: { type: String, required: true},
    team2: { type: String, required: true},
    betinfo: { type: String, required: true},
    odds: { type: String, required: true},
    bettype: { type: String, enum: ["Over/Under", "Moneyline", "Spread" ]},
    date: { type: Date, default: Date.now },
});

const Betslip = mongoose.model("betslip", betslipSchema);

module.exports = Betslip;