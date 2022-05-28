/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 

In other words, return the symmetric difference of the two arrays.

**Note:** You can return the array with its elements in any order.

My first solution */

function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.map(n => arr2.some(num => num == n)? null : newArr.push(n));
    arr2.map(n => arr1.some(num => num == n)? null : newArr.push(n));
  
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Another way

function diffArray(arr1, arr2) {

    const newArr = [...arr1, ...arr2]
                .filter((n) => !arr1.includes(n) || !arr2.includes(n));
    
    return newArr;
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);