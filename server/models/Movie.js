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
      type: [String],
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
    price: {
      type: Number,
      required: true,
    },
    acceptHalf: {
      type: Boolean,
      required: true,
    },
    sessions: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", MovieSchema);
