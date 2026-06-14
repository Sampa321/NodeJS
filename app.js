// fs = require("node:fs")
// fs.readFile("hello.txt","utf-8", (err,data)=>{
//     console.log(data);
// })


// const {add, multiply,user} = require("./function.js");
// console.log(add(2, 3));
// console.log(multiply( 4, 3));
// console.log("Total user :"+user);

// let store = require("./dummy");
// console.log(store);


// require("./dummy")  



//requre function only execute one time not multiple time
// require("./dummy")
// require("./dummy")
// require("./dummy") 
// require("./dummy")  


const {isEven, isOdd, isVowel, add, sub, multiply, divide, moduleValue} = require("./practice");
n =10;
a = 12;
ch = 'p';
b = 4;
console.log(n," is : ",isEven(n) ? "even" : "odd");
console.log(n," is : ",isOdd(n) ? "Odd" : "even");
console.log(ch," is : ",isVowel(ch)? "vowel" : "consonant");
console.log("Add : "+add(a,b));
console.log("Subtract : "+sub(a,b));
console.log("Multiple : "+multiply(a,b));
console.log("Divide : "+divide(a,b));
console.log("Module : "+moduleValue(a,b));


