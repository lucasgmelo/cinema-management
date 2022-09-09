const {
  createSession,
  deleteSession,
  getSessionById,
  getSessions,
  updateSession,
} = require("../repositories/sessionsRepositories");

module.exports = {
  list: async (req, res) => {
    try {
      const sessions = await getSessions();

      res.status(200).send(sessions);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const newSession = await createSession(req.body);

      res.status(201).send(newSession);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  detail: async (req, res) => {
    try {
      const { id } = req.params;

      const Session = await getSessionById(id);

      if (!Session)
        return res.status(404).send({ message: "Session not found" });

      res.send(Session);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const Session = await getSessionById(id);

      if (!Session)
        return res.status(404).send({ message: "Session not found" });

      const updatedSession = await updateSession(id, req.body);

      res.send(updatedSession);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const Session = await getSessionById(req.params.id);

      if (!Session)
        return res.status(404).send({ message: "Session not found" });

      await deleteSession(req.params.id);

      res.send({ message: "Deleted successfully" });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
