const user ={
    username:"sahil",
    price:999,

    welcome: function(){
        console.log("hello " + `${this.username}`); // hello sahil 

    }
}
user.welcome(); // hello sahil
user.username = "john doe";
user.welcome(); // hello john doe
user.price = 1000;
console.log(user.price); // 1000


// function chai(){
//     let chai = "chai";
//     console.log(this.chai); // undefined
// }
// chai(); // chai

//this workw with object 
//for arrow function this is not work 
const user1 = () =>{
    let username = "sahil";
    console.log(this.username); // undefined
    console.log(this); // {}

}
user1(); 

const addTwo = (num1,num2)=>{
     return num1+num2;
}
console.log(addTwo(2,3)); // 5

//implicit return format
const addtwo1 =(num1,num2)=>num1+num2;
console.log(addtwo1(2,3)); // 5
//if {} used then return is required
//if not used then return is not required

//to return object like this

const nam1 = (username, age) => ({ username: username, age: age }); // corrected parameter name
console.log(nam1("sahil", 20)); // { username: 'sahil', age: 20 }

const myarray =[2,5,3,7];
myarray.forEach((num) => {
    console.log(num); // 2 5 3 7
}); 


