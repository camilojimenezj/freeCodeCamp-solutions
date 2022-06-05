/* Make a function that looks through an array of objects (first argument) and returns an array of all 

objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to 

be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, 

and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the name and its value, 

that was passed on as the second argument. */

function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    for(let obj of collection) {
        let count = 0;
        for(let entry of Object.keys(source)){
            if (obj[entry] == source[entry]){
            count++
            }
        }
  
        if (count == Object.keys(source).length){
        arr.push(obj)
        }
    }
    // Only change code above this line
    return arr;
}

//Using every and filter

function whatIsInAName(collection, source) {
    let sourceKey = Object.keys(source);
    return collection
  			.filter(obj => sourceKey
            .every(key => obj.hasOwnProperty(key) 
                    && obj[key] == source[key]));
}