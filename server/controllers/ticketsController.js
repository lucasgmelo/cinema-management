const {
  getTickets,
  createTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
} = require("../repositories/ticketsRepositories");

module.exports = {
  list: async (req, res) => {
    try {
      const tickets = await getTickets();

      res.status(200).send(tickets);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const newTicket = await createTicket(req.body);

      res.status(201).send(newTicket);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  detail: async (req, res) => {
    try {
      const ticket = await getTicketById(req.params.id);

      if (!ticket) return res.status(404).send({ message: "ticket not found" });

      res.send(ticket);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const ticket = await getTicketById(id);

      if (!ticket) return res.status(404).send({ message: "ticket not found" });

      const updatedTicket = await updateTicket(id, req.body);

      res.send(updatedTicket);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const ticket = await getTicketById(req.params.id);

      if (!ticket) return res.status(404).send({ message: "ticket not found" });

      await deleteTicket(req.params.id);

      res.send({ message: "Deleted successfully" });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
