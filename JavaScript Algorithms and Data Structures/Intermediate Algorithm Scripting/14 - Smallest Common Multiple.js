/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, 

as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that 

is also evenly divisible by all numbers *between* 1 and 3. The answer here would be 6. */

function smallestCommons(arr2) {
  let min = Math.min(...arr2);
  let max = Math.max(...arr2);
    let arr = Array((max - min) + 1)
          .fill(0)
          .map((n, i) => min + i);
            
  let limit = arr.reduce((acc, num) => acc * num, 1)
  
  for (let i = max; i <= limit; i++){
    if(arr.every(n => i % n === 0)){
      return i;
    }
  }
}
  
smallestCommons([1,5]);
