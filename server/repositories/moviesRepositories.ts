import { MovieType } from "../models/Movie";

const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();

    return movies;
  },
  getMovieById: async (id: string) => {
    const movie = await Movie.findById(id);

    return movie;
  },
  createMovie: async (movieInfo: MovieType) => {
    const newMovie = await Movie.create(movieInfo);

    return newMovie;
  },
  updateMovie: async (id: string, body: MovieType) => {
    const updatedMovie = await Movie.findByIdAndUpdate(id, body, { new: true });

    return updatedMovie;
  },
  deleteMovie: async (id: string) => {
    return await Movie.findByIdAndDelete(id);
  },
};
