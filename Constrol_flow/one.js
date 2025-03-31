//if()

const isUserloggedIn = true; //boolean value
const isUserAdmin = false; //boolean value
if(true){//it will go in the if block and execute the code inside it.
    console.log("true block"); 
}
let temp = 40;
//comparison opeartor <,>, <=, >=, ==, ===, !=, !==
//logical operator &&, ||, !
//bitwise operator &, |, ^, ~, <<, >>, >>>
//ternary operator ? :
//conditional operator ? :
if(2===2){
    console.log("2===2 is true"); //it will go in the if block and execute the code inside it.
}
if(2==='2'){
    console.log("2==='2' is true"); //it will not go inside ...//it will go in the if block and execute the code inside it.
}

if(temp<50){
    console.log("temp is less than 50"); //it will go in the if block and execute the code inside it.
}
else if(temp>50 && temp<100){
    console.log("temp is greater than 50 and less than 100"); //it will go in the if block and execute the code inside it.
}
else{
    console.log("temp is greater than 100"); //it will go in the if block and execute the code inside it.
}

//imp
const score = 200;

if(score>100){
    const power = 'fly';
    console.log(`${power}`); //it will go in the if block and execute the code inside it.
    console.log(`${score}`); //it will go in the if block and execute the code inside it.
}

//implecit scope
let balance = 200;
 if(balance>100) console.log("balance is greater than 100"); //it will go in the if block


 //falsy values 
 1)false
 2) 0
 3) -0;
 4) BigInt 0n,
 5) null
 6) undefined
 7)NaN


 //turhy values
 "0" is true
 'false' is true;
 " " is turthy
[],{},function(){} is true;


const emptyOjb ={};

if(Object.keys(emptyOjb)){
    console.log('empty');
}


//nullish coalescing operator(??)null undefined

let val1;
val = 5??10;
console.log(val1);//5
val2 = null ??10;

var1 = undefined ?? 15;

//tenary operator

 2==3? true:false;

 