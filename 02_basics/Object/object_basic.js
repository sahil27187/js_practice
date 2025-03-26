//singleton; only one instance of the object is created
//obj.create() is used to create a new object
//object literal
const object = {
    name: 'sahil',
    age: 21,
    hobbies: ['reading', 'travelling'],
    greet: function() {
        console.log('Hello');
    }
};

console.log(object);
// { name: 'sahil', age: 21, hobbies: [ 'reading', 'travelling' ], greet: [Function: greet] }
console.log(object.name);
//sahil
console.log(object["age"]);
//21
object.greet();
//Hello
//object.create()
const obj = Object.create(object);
console.log(obj);
// {}

//to use symbol in object
const sym = Symbol("key1");
const obj1 ={
    name :"sahil",
    age :21,
    [sym]:'symbol'
}
console.log(typeof obj1 [sym]);
//symbol

//to freeze the object
Object.freeze(obj1);
obj1.name = "amit";
console.log(obj1);
//{ name: 'sahil', age: 21, [Symbol(key1)]: 'symbol' }


//to seal the object //seal is used to prevent the addition of new properties to the object
Object.seal(obj1);
obj1.name = "amit";
console.log(obj1);
//{ name: 'amit', age: 21, [Symbol(key1)]: 'symbol' }

console.log(object.greet());

object.refrence = function(){
     console.log(`my name is ${object.name}`);
}
console.log(object.refrence());

