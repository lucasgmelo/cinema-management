import { Request, Response } from "express";
const { Router } = require("express");

const moviesController = require("./controllers/moviesController.ts");

const router = Router();

router.route("/").get(async (req: Request, res: Response) => {
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

module.exports = router;
