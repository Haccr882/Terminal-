function getImage(lang){
  const map = {
    node: 'node:20',
    python: 'python:3.11',
    cpp: 'gcc'
  };
  return map[lang] || 'ubuntu:22.04';
}

module.exports = { getImage };
