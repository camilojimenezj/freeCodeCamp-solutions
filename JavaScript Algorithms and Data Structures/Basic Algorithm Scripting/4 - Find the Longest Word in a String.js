/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {
    let arr = str.split(" ")
              .map((a) => a.length);
  
    return Math.max(...arr);
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");