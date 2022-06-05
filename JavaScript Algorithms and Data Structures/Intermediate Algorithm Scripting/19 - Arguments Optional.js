/* Create a function that sums two arguments together. If only one argument is provided, 

then return a function that expects one argument and returns the sum.

For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.
*/


function addTogether() {
  let [first, second] = arguments;
  if (typeof first !== "number"){
    return undefined
  }
  if (second == undefined){
    return function addTogether(second) {
      if (typeof second !== "number"){
        return undefined
      }
      return first + second
      }
  }
  
  if (typeof second !== "number"){
    return undefined
  }
  return first + second
}
addTogether(2,3);
