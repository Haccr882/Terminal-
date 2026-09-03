
const queue = [];

function add(job) {
  queue.push(job);
}

function next() {
  return queue.shift();
}

module.exports = { add, next };
