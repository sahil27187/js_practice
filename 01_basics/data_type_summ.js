
//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
// 7 primitive are call by values methods
//string , null , symbol,Number,undefined,boolean,BigInt
//refrence by NON PRIMITIVE
//object, array, function

// Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object

const id = Symbol("id");
const id1= Symbol("id");
console.log(id===id1); //false
console.log(id); //Symbol(id)
let s = id.toString(); //Symbol(id)
console.log(s);


//bigint
const bignumber = 3242433434343433434n;
console.log(bignumber);
console.log(typeof(bignumber));

const heros = ["superman","batman","spiderman"];
console.log(heros);
//object
let detials ={
    name:"superman",
    age:30,
    isHero:true
}
console.log(detials);

//function
let ans = function(){
    console.log("Hello");
}
console.log(ans);


//meomory in javascrpit;

//primitive - stack meomory used  whatever we write we get a copy of that
//heap - non -primptive ; here we get the reference of the value
//stack
let a = 10;
let b = a;
console.log(a,b);

//heap 
let user ={
    name :"sahil",
    class:"btech"
}

let user1 = user;

user1.name = "don";
console.log(user1);
