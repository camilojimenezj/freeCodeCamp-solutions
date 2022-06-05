/* Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
    return str
        .split(" ")
        .map(char => String.fromCharCode(parseInt(char, 2)))
        .join("");
}
