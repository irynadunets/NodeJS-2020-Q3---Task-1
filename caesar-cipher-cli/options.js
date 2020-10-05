const { program } = require('commander');
const fs = require('fs');
const path = require('path');

const { errorsValidator } = require('./errorsValidator');

program
  .requiredOption('-s, --shift <number>', 'a shift')
  .requiredOption('-a, --action <type>', 'an action encode/decode')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file')
  .parse(process.argv);

errorsValidator();

module.exports = program;
