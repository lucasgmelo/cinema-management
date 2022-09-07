const { Schema, model } = require("mongoose");

export interface MovieType {
  link_cover: string;
  title: string;
  duration: string;
  genre: string;
  sinopse: string;
  director: string;
  cast: string;
  classification: string;
  start_date: string;
  end_date: string;
  session1: {
    room: string;
    time: string;
  };
  session2?: {
    room: string;
    time: string;
  };
}

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
