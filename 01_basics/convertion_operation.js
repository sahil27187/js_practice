let score = "33"
//let score = "33abc"  //NaN
//let score = null; //0
//let score = undefined; //NaN
//let score = true; //1
//let score = false; //0
//let score = Symbol("33"); //NaN

console.log(typeof(score)); //33
console.log(score.toString()); //string

let valueInnumber = Number(score);
console.log(valueInnumber); //33
console.log(typeof(valueInnumber)); //number

//silimar to NUmber we can use parseInt and parseFloat
let valueInnumberUsingParseInt = parseInt(score);
console.log(valueInnumberUsingParseInt); //33
console.log(typeof(valueInnumberUsingParseInt)); 

//String , Number, Boolean, Object, Symbol
//parseInt, parseFloat, isNaN, isFinite
//toString, toFixed, toPrecision, toExponential
//valueOf

//if we provide string as 33abc then it will return NaN;

//if score is null then we get the value as 0;

//----------------------------------------------------------------------------
let value = 3;
console.log(values+"2"); //32
console.log(values-2); //1
console.log(values*2); //6
console.log(values/2); //1.5

console.log(1+2+"2"); //32
console.log(1-2+"2"); //-12
console.log("2"+1+2); //212
console.log("2"-1+2); //3
console.log(1+"2"+2); //122
console.log(1-"2"+2); //-12
console.log(1-2+"2"); //-12


//comparison operation
console.log(3 == 3); //true
console.log(3 == "3"); //true
console.log(3 === "3"); //false
console.log(3 != 3); //false
console.log(3 != "3"); //false
console.log(3 !== "3"); //true
console.log(3 > 3); //false
console.log(3 >= 3); //true
console.log("02">1); //true
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null>0); //false
console.log(null>=0); //true

//logical operation
console.log(true && true); //true
console.log(true && false); //false
console.log(true || false); //true
console.log(!true); //false
console.log(!false); //true

//bitwise operation
console.log(3 & 2); //2
console.log(3 | 2); //3



//ternary operation
let age = 18;
let isEligible = age > 18 ? "yes" : "no";
console.log(isEligible); //no

