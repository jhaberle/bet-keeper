const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betslipSchema = new Schema({
    match: { type: String, required: true},
    betinfo: { type: String, required: true},
    
});

const Betslip = mongoose.model("betslip", betslipSchema);

module.exports = Betslip;