/* Given the array `arr`, iterate through and remove each element starting from the first 

element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, `arr` should be returned as an empty array. */

function dropElements(arr, func) {
	if (arr.findIndex(func) == -1) {
    return [];
    } 
  return arr.slice(arr.findIndex(func));
}

dropElements([1, 2, 3], function(n) {return n < 3; });
