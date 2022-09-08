const { Schema, model } = require("mongoose");

const MovieSchema = new Schema(
  {
    link_cover: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    sinopse: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    classification: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    session1: {
      type: {
        room: String,
        time: String,
      },
      required: true,
    },
    session2: {
      type: {
        room: String,
        time: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", MovieSchema);
