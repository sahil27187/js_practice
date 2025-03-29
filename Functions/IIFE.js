//imediately invked function expression
// (IIFE) is a function that runs as soon as it is defined.
// It is a design pattern that helps to avoid polluting the global scope with variables and functions.
// It is also used to create a private scope for variables and functions.

//fastes way to create this   
(function chai(){
    console.log("data");
})();//semicolon is required for ending


//this way arrow can be implemented
( ()=>{
    console.log("data");
} )();

//to pass name

( (name)=>{
    console.log(`${name}`);
} )("sahil");
