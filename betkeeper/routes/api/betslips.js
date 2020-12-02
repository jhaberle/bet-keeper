const router = require("express").Router();
const betslipsController = require("../../controllers/betslipsController");

router
    .route("/")
    .get(betslipsController.findAll)
    .post(betslipsController.create);

// router
//     .route("/:id")
//     .delete(booksController.remove);

module.exports = router;
