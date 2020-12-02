const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betslipSchema = new Schema({
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  betinfo: { type: String },
  odds: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Betslip = mongoose.model("betslip", betslipSchema);

module.exports = Betslip;
