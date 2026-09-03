function generateId(){
  return 'id_' + Math.random().toString(36).substring(2,8);
}

module.exports = { generateId };
