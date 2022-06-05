/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return `undefined`. */

function fearNotLetter(str) {
  for (let i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++){
    if (!str.includes(String.fromCharCode(i))) {
        return String.fromCharCode(i)
    }
  }
}
  
fearNotLetter("abce");
