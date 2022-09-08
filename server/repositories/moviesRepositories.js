const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();

    return movies;
  },
  getMovieById: async (id) => {
    const movie = await Movie.findById(id);

    return movie;
  },
  createMovie: async (movieInfo) => {
    const newMovie = await Movie.create(movieInfo);

    return newMovie;
  },
  updateMovie: async (id, body) => {
    const updatedMovie = await Movie.findByIdAndUpdate(id, body, { new: true });

    return updatedMovie;
  },
  deleteMovie: async (id) => {
    return await Movie.findByIdAndDelete(id);
  },
};
