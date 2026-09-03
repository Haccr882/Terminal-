const pool = [];

function add(containerId){
  pool.push(containerId);
}

function list(){
  return pool;
}

module.exports = { add, list };
