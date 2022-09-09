const { Schema, model } = require("mongoose");

const SessionSchema = new Schema(
  {
    movie_id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    session_number: {
      type: Number,
      required: true,
    },
    unavailable_seats: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Session", SessionSchema);
