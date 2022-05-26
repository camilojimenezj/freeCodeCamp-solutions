/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    let arr2 = [];
    for (let i = 0; i < arr.length/size; i++){
      arr2.push([...arr.slice(i*size, i*size + size)])
    }
    return arr2;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);