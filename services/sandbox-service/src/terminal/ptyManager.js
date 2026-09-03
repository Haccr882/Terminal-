
const pty = require('node-pty');

function createPTY() {
  const shell = process.env.SHELL || 'bash';
  return pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  });
}

module.exports = { createPTY };
