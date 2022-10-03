const { Schema, model } = require("mongoose");

const TicketSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    tickets: {
      type: [Object],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Ticket", TicketSchema);
