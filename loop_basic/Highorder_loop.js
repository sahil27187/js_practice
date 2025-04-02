//for of 
//they are array specific loops

["",""];
[{},{},{}];

const arr = [1,2,3,4];
//for of 
for (const  val of arr) {
    console.log(val);
}
const greet = "hello bhai";

for (const char of greet) {
    if(char ==' '){
        continue;
    }
    console.log(`each chas is ${char}`);
}

//MAPS similar to arrays

const map = new Map;
map.set('IN',10);
map.set('US',20);
console.log(map.keys());
console.log(map.values());

for (const [key,values] of map) {
    console.log(key, ':',values)
}
// IN : 10
// US : 20

//for of dont work for objects 

const myobj = {
    js : 'javascript',
    cpp: 'c++'
}

for (const key in myobj) {
    console.log(myobj[key]);
}
// javascript
// c++
for (const key in myobj) {
    console.log(key);
}
// js
// cpp

//for in dont work for map

const coding = ["js","ruby"];
//---------------------------------------------------------------
//callback functoin dont have name
coding.forEach(function name(val) {
    console.log(val);
})

coding.forEach((val) => {

    console.log(val);
})
//---------------------------------------------------------
//if the fucntion is passed somewhere else;
function printme(item){
    console.log(item);
}

coding.forEach(printme);
//----------------------------------------------------------

//for printing the 3 use case if we want
 coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
 });

 //------------------------------------------------------

 const mycode = [
    {
        lang :"sahil",
        name :'name'
    },
    {

    },
    {

    },
 ]

 mycode.forEach((item)=>{
    console.log(item.lang);
 })