
// // Returns the first character of a string

// function firstCharacter(rString) {
//     return(rString.charAt(0));
// }

// console.log(firstCharacter("Example"))

function first(string, ret) {
    ret(string.charAt(0));
}

first('Example', function (string) { 
    console.log(string);
});



// // Returns the last charcter of a string

// function lastCharacter(randomString) {
//     var last = randomString.length - 1;
//     return(randomString.charAt(last));
// }

// console.log(lastCharacter("Example"))


function last(rString, ret) {
    var lastChar = rString.length - 1;
    ret(rString.charAt(lastChar));
}

last('Example', function (rString) { 
    console.log(rString);
});




// Create a function that takes a string and a continuation (callback)
// Your function should use the two previous functions you created to "return" a string that contains both the first and last character of the initial string
// I should be able to use your function as such:
//   getFirstAndLast("hello", function(newStr) { console.log(newStr); }); // should output "ho"


function getFirstAndLast(newStr, ret) {
    var lastStr = newStr.length - 1;
    var firstChar = newStr.charAt(0);
    var lastChar = newStr.charAt(lastStr);
   
    ret(firstChar + lastChar);
}

getFirstAndLast("Example", function(newStr) { 
    console.log(newStr); 
    
});
