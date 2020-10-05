module.exports = {
  caesar: (shift, input_string, action) => {
    let letters;
    let output_string = '';
    for (let i = 0; i < input_string.length; i++) {
      if (/[A-Za-z]/.test(input_string[i])) {
        if (action === 'encode') {
          letters = input_string[i].toUpperCase() === input_string[i] ?
          'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
        } else {
          letters = input_string[i].toUpperCase() === input_string[i] ?
          'ZYXWVUTSRQPONMLKJIHGFEDCBA' : 'zyxwvutsrqponmlkjihgfedcba';
        }
        output_string += letters[(letters.indexOf(input_string[i]) + +shift) % 26];
      } else {
        output_string += input_string[i];
      }
    }
    return output_string;
  }
};
