//scope 
//{ } is represenation of a scope in JavaScript.
//var create a issue in the global scope
var c = 300;

if(true){
    var c = 100;
}
console.log(c); // 100
//let create a issue in the block scope
let d = 300;
if(true){
    let d = 100;
    console.log(d); // 100
}
console.log(d); // 300
//----------------------------------------------------------------------------

//nested scope
function one(){
    const username = "John Doe";

    function two(){
        const website = 'yt';
        console.log(username); // John Doe

    }
   // Console.log(website);// ReferenceError: website is not defined

    two();
}

one();

if(true){
    const username="john doe";  
    if(username==="john doe"){
        const website = "yt";
        console.log(username + website); // john doe
     } 
     //console.log(website);// hello john doe
}
//console.log(username); // ReferenceError: username is not defined

//----------------------------------------------------------------------------

//this is a function

console.log(addtwo(2)); // 3
function addtwo(nums){
    return nums+1
}

//this is a expression here for function 
//console.log(addTwo(2)); // TypeError: addTwo is not decleared yet
const addTwo = function(nums){
    return nums+1;
}

addTwo(2);