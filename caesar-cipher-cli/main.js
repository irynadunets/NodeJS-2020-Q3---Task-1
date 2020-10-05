const { pipeline, Transform } = require('stream');
const fs = require('fs');
const path = require('path');

const { program } = require('./options');
const { caesar } = require('./caesar');

const transtream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(caesar(program.shift, chunk.toString(), program.action));
    callback();
  }
});

pipeline(
  program.input ? fs.createReadStream(path.join(__dirname, program.input), { flags: 'r' }) : process.stdin,
  transtream,
  program.output ? fs.createWriteStream(path.join(__dirname, program.output), { flags: 'a+' }) : process.stdout,
  error => {
    if (error) {
      error.code === 'ENOENT' ? process.stderr.write('Error, No such file or directory!') : console.error(error);
    } else {
      console.log('Encryption successful');
    }
  }
);
