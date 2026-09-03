
const WebSocket = require('ws');
const { createPTY } = require('./ptyManager');

function startTerminalServer(server) {
  const wss = new WebSocket.Server({ server, path: '/terminal' });

  wss.on('connection', (ws) => {
    const pty = createPTY();

    pty.onData(data => ws.send(data));

    ws.on('message', msg => {
      pty.write(msg.toString());
    });

    ws.on('close', () => pty.kill());
  });

  console.log('Terminal WS started');
}

module.exports = { startTerminalServer };
