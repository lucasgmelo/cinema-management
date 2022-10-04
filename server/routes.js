const { Router } = require("express");

const moviesController = require("./controllers/moviesController.js");
const ticketsController = require("./controllers/ticketsController.js");

const router = Router();

router.route("/").get(async (req, res) => {
  res.status(200).send("hello!");
});

router.route("/hours").get(moviesController.getAvailableSessions);

router
  .route("/hours")
  .post(moviesController.getAvailableSessions);

router
  .route("/movies")
  .get(moviesController.list)
  .post(moviesController.create);
router
  .route("/movies/:id")
  .get(moviesController.detail)
  .patch(moviesController.update)
  .delete(moviesController.delete);

router
  .route("/tickets")
  .get(ticketsController.list)
  .post(ticketsController.create);
router
  .route("/tickets/:id")
  .get(ticketsController.detail)
  .patch(ticketsController.update)
  .delete(ticketsController.delete);

module.exports = router;
