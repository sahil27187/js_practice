
//rest opeartor is used to over come the limitation of arguments object
//arguments object is not an array, it is an array like object
//rest operator is used to convert the arguments object into an array
function sum(...args){
    let total = 0;
    for(let value of args){
        total += value;
    }
    return total;
}
function cacl_price(...nums1){
    return nums1;
}
console.log(cacl_price(1,2,3,4,5,6,7,8,9,10));
//[1,2,3,4,5,6,7,8,9,10]

function cacli(val1 ,val2, ...num1){
    return num1;
}
console.log(cacli(20,15,500,2000)); //ony the elemet aprt from valus goes in array
//[500,2000]


const user ={
    username : 'sahil',
    age : 19
}

function handle_object(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}
handle_object(user);

handle_object({
    username :'sam',
    age :20
})

const newNumbers = [1,2,3,4,5,6,7,8,9,10];

function return_sec_array(getArray){
    if(getArray.length < 2){
        return 'array is too short';
    }
    return getArray[1];
}

console.log(return_sec_array(newNumbers));
console.log(return_sec_array([1]));
