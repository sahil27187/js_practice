function say_my_name(){
    for(let i = 0; i < 10; i++){
        console.log("Sahil Bhai");
    }
}

//say_my_name();

function add_numbers(a,b){
     
    console.log(a+b);
}
add_numbers(10,20);
add_numbers(3,'a'); //3a;
add_numbers('a','b'); //ab;
add_numbers(); //NaN;

//return type function 

function sub_number(a,b){
    return a-b;
}

const result = sub_number(4,2);
console.log(result);

function loginUser(username = 'sahil'){
    if(username===undefined){ //similar to(!username)
        console.log('please provide username');
        return 

    }
    return `${username} just logged in`;
}
//console.log(loginUser('sahil'));
//console.log(loginUser());//undefined login
console.log(loginUser('amit'));//sahil login
