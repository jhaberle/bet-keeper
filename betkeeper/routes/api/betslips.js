const router = require("express").Router();
const betslipsController = require("../../controllers/betslipsController");

const Betslip = require("../../models/betslip");

router.get(betslipsController.findAll).post(betslipsController.create);

router.route("/:id").delete(betslipsController.remove);

module.exports = router;
