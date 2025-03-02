"use strict"; //treat this as newer version of js code.

// alert("hello");//we are using nodejs not browers so this will not work.
console.log("3" + 2) //32 this is string 
console.log("3" - 2) //1
console.log("3" * 2) //6
console.log("3" / 2) //1.5
console.log("3" % 2) //1
console.log("3" ** 2) //9
console.log(3+2)//5


//datatyees
//primitive data types
//1. string
//2. number => 2^53 - 1
//3. boolean -> true or false
//4. undefined -> default value of variable
//5. null  -> standalond value(empty value)
//6. symbol -> `unique` and `immutable` value
//7. bigint

console.log(typeof "hello") //string

//type of null is Object but it is not object it is a standalone value.
//type of undefined is undefined
//type of symbol is symbol

//object data types
//1. object
//2. array
//3. function
//4. date
//5. regex
//6. map
//7. set
//8. weakmap
//9. weakset
//10. promise
//11. error
//boolean
//error
//const re = /\w+/;
// OR
const re = new RegExp("\\w+");
console.log(re.test("hello")); //true


