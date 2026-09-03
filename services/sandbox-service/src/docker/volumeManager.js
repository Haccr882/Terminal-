function createVolume(name){
  return `/tmp/${name}`;
}

module.exports = { createVolume };
