
const processes = new Set();

function track(proc) {
  processes.add(proc);
}

function cleanup() {
  processes.forEach(p => {
    try { p.kill(); } catch(e){}
  });
}

module.exports = { track, cleanup };
