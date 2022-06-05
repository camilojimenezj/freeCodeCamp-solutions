/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

//First way 

function reverseString(str) {
    newstr = ""
     for (let i = 0; i < str.length; i++){
       newstr = str[i] + newstr
     }
     return newstr;
   }
   
   reverseString("hello");

//Second solution using methods

function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
}