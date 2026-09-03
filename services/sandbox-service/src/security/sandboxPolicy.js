
function check(cmd) {
  if (cmd.includes('rm -rf /')) throw new Error('Blocked command');
  return true;
}

module.exports = { check };
