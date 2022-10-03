const Ticket = require("../models/Ticket");

module.exports = {
  getTickets: async () => {
    const tickets = await Ticket.find();

    return tickets;
  },
  getTicketById: async (id) => {
    const ticket = await Ticket.findById(id);

    return ticket;
  },
  createTicket: async (TicketInfo) => {
    const newTicket = await Ticket.create(TicketInfo);

    return newTicket;
  },
  updateTicket: async (id, body) => {
    const updatedTicket = await Ticket.findByIdAndUpdate(id, body, {
      new: true,
    });

    return updatedTicket;
  },
  deleteTicket: async (id) => {
    return await Ticket.findByIdAndDelete(id);
  },
};
