const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    let decodedString = '';

    for (let i = 0; i < expr.length; i += 10) {
        let encodedChar = expr.slice(i, i + 10)
        if (encodedChar === '**********') {
            decodedStr += ' ';
        } else {
            encodedChar = encodedChar.replace(/^0*/, '').replaceAll('10', '.').replaceAll(11, '-');
            decodedString += MORSE_TABLE[encodedChar];
        }
    }

    return decodedString;
}

module.exports = {
    decode
}