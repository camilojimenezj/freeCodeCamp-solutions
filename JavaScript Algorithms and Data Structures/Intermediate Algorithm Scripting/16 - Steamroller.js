/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
    let newArr = [].concat(...arr)
    return newArr.some(Array.isArray) ? steamrollArray(newArr) : newArr;
}
