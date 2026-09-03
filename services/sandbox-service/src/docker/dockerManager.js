const { exec } = require('child_process');

function createContainer() {
  return new Promise((resolve, reject) => {
    exec(`docker run -dit --rm ubuntu:22.04 bash`, (err, stdout) => {
      if (err) return reject(err);
      resolve(stdout.trim());
    });
  });
}

module.exports = { createContainer };
