
function withTimeout(proc, ms) {
  setTimeout(() => {
    try { proc.kill(); } catch(e){}
  }, ms);
}

module.exports = { withTimeout };
