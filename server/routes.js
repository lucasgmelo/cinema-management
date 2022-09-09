const { Router } = require("express");

const moviesController = require("./controllers/moviesController.js");
const sessionsController = require("./controllers/sessionsController.js");

const router = Router();

router.route("/").get(async (req, res) => {
  res.status(200).send("hello!");
});

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
  .route("/sessions")
  .get(sessionsController.list)
  .post(sessionsController.create);
router
  .route("/sessions/:id")
  .get(sessionsController.detail)
  .patch(sessionsController.update)
  .delete(sessionsController.delete);

module.exports = router;
