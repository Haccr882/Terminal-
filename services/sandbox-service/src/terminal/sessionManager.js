
const sessions = new Map();

function createSession(id, pty) {
  sessions.set(id, pty);
}

function getSession(id) {
  return sessions.get(id);
}

function deleteSession(id) {
  sessions.delete(id);
}

module.exports = { createSession, getSession, deleteSession };
