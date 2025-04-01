//iterations

 //for loop
//let arr = new Array(10);
 let array = [1, 2, 3];
 for (let i = 0; i < array.length+1; i++) {
    const element = array[i];
    console.log(element);  
 }
//1 2 3 undefined
//nested loop
for (let i = 0; i <=10; i++) {

    for(let j =0;j<=20;j++){
        const element = j*i ;
        console.log(element);
    }   
}

 let name_arr = ['sahil','amit','ramesh','jaya'];

 for (let i = 0; i < name_arr.length; i++) {
    const element = name_arr[i];
    console.log(element)   
 }

 //break and continue;

 for (let index = 0; index < 20; index++) {

    if(index =5){ console.log(`value of i is ${index}`) 
    break;
    }
    index++;
    

    
 }