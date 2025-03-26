const tinderuser = new Object();//this is also a object 
console.log(tinderuser);//declearation like this is singalton object
//{}
const tinderuser1 ={} //it is non singalton object

    tinderuser.id ="2";
    tinderuser.name ="sahil";
    tinderuser.age = 21;
    tinderuser.hobbies = ['reading', 'travelling'];
    tinderuser.isloggedin = false;
    console.log(tinderuser);
//{ id: '2', name: 'sahil', age: 21, hobbies: [ 'reading', 'travelling' ], isloggedin: false }

const regularuser={
    email : "some@gmail.com",
    fullname: {
        userfullname:{
        firstname:"sahil",
        lastname:"Mane"
    }
    }
    
}
console.log(regularuser.fullname?.userfullname.firstname);

const obj1 = {1:"a",2:"b",3:"c"};
const obj2 ={4:"d",5:"e",6:"f"};
console.log(Object.keys(obj1)); //return type is array
//['1','2','3']
console.log(Object.values(obj1));
//['a','b','c']
console.log(Object.entries(obj1));
//[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ] ]
console.log(Object.getOwnPropertyNames(obj1));
//['1','2','3']
console.log(Object.getOwnPropertySymbols(obj1));
//[]
console.log(Object.getPrototypeOf(obj1));
//{}
console.log(Object.isFrozen(obj1));
//false
console.log(Object.isSealed(obj1));
//false
console.log(Object.isExtensible(obj1));
Object.isFrozen(obj1);

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//=== is used for strict comparison means it will check the type and value of the variable
console.log(obj1 === obj3);
//false

//take values from databases in arrayofobject
const users = [
              {
              },
              {
              },
              {
              },
                ]; //this is array of object
users[1].email
console.log(tinderuser);
console.log(tinderuser.hasOwnProperty('name'));


