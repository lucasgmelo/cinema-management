const Session = require("../models/Session");

module.exports = {
  getSessions: async () => {
    const sessions = await Session.find();

    return sessions;
  },
  getSessionById: async (id) => {
    const session = await Session.findById(id);

    return session;
  },
  createSession: async (SessionInfo) => {
    const newSession = await Session.create(SessionInfo);

    return newSession;
  },
  updateSession: async (id, body) => {
    const updatedSession = await Session.findByIdAndUpdate(id, body, {
      new: true,
    });

    return updatedSession;
  },
  deleteSession: async (id) => {
    return await Session.findByIdAndDelete(id);
  },
};
