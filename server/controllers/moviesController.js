const {
  getMovies,
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../repositories/moviesRepositories");

const convertDateStringToNumber = (startDate, endDate) => {
  const startDates = startDate.split("/");
  const startDatesNumber = startDates.map((date) => Number(date));
  startDatesNumber[1]--;

  const endDates = endDate.split("/");
  const endDatesNumber = endDates.map((date) => Number(date));
  endDatesNumber[1]--;

  return [startDatesNumber, endDatesNumber];
};

module.exports = {
  list: async (req, res) => {
    try {
      const movies = await getMovies();

      res.status(200).send(movies);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getAvailableSessions: async (req, res) => {
    try {
      let possibleHours = ["11:00", "14:00", "17:00", "20:00", "23:00"];

      const movies = await getMovies();

      const [arrStart, arrEnd] = convertDateStringToNumber(
        req.query.startDate,
        req.query.endDate
      );

      const startInDate = new Date(arrStart[2], arrStart[1], arrStart[0]);
      const endInDate = new Date(arrEnd[2], arrEnd[1], arrEnd[0]);

      movies.forEach((movie) => {
        const movieStartDate = movie.start_date;
        const movieEndDate = movie.end_date;

        const [arrMovieStart, arrMovieEnd] = convertDateStringToNumber(
          movieStartDate,
          movieEndDate
        );

        const startMovieInDate = new Date(
          arrMovieStart[2],
          arrMovieStart[1],
          arrMovieStart[0]
        );
        const endMovieInDate = new Date(
          arrMovieEnd[2],
          arrMovieEnd[1],
          arrMovieEnd[0]
        );

        if (
          (startInDate.getTime() <= endMovieInDate.getTime() &&
            startInDate.getTime() >= startMovieInDate.getTime()) ||
          (endInDate.getTime() <= endMovieInDate.getTime() &&
            endInDate.getTime() >= startMovieInDate.getTime())
        ) {
          movie.managementInfo.forEach((info) => {
            if (info.room == req.query.room) {
              possibleHours = possibleHours.filter((hour) => hour != info.hour);
            }
          });
        }
      });

      res.status(200).send(possibleHours);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const newMovie = await createMovie(req.body);

      res.status(201).send(newMovie);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  detail: async (req, res) => {
    try {
      const movie = await getMovieById(req.params.id);

      if (!movie) return res.status(404).send({ message: "movie not found" });

      res.send(movie);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const movie = await getMovieById(id);

      if (!movie) return res.status(404).send({ message: "movie not found" });

      const updatedmovie = await updateMovie(id, req.body);

      console.log(req.body);

      res.send(updatedmovie);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const movie = await getMovieById(req.params.id);

      if (!movie) return res.status(404).send({ message: "movie not found" });

      await deleteMovie(req.params.id);

      res.send({ message: "Deleted successfully" });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
