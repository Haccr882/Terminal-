
const { spawn } = require('child_process');

function run(cmd, args=[]) {
  const proc = spawn(cmd, args);

  proc.stdout.on('data', d => console.log(d.toString()));
  proc.stderr.on('data', d => console.error(d.toString()));

  return proc;
}

module.exports = { run };
