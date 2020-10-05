const { program } = require('commander');
const fs = require('fs');
const path = require('path');

module.exports = {
  errorsValidator: () => {
  if (!['encode', 'decode'].includes(program.action)) {
    process.stderr.write('Error! Action is required and must have name encode or decode.');
    process.exit(1);
  } else if (isNaN(program.shift) || !Number.isInteger(+program.shift) || +program.shift < 1) {
    process.stderr.write('Error! Shift must be positive integer.');
    process.exit(1);
  }

  if (program.input) {
    fs.access(path.join(__dirname, program.input), fs.F_OK, error => {
      if (error) {
        error.code === 'ENOENT' ? process.stderr.write('Error! Path input is not exist. ') : console.error(error);
        process.exit(1);
      }
    });
  }

  if (program.output) {
    fs.access(path.join(__dirname, program.output), fs.F_OK, error => {
      if (error) {
        error.code === 'ENOENT' ? process.stderr.write('Error! Path output is not exist.') : console.error(error);
        process.exit(1);
        }
    });
  }
}
}
