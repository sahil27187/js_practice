
const coding =["js",'ruby','java','pyhton']

const val = coding.forEach((item)=>{
    console.log(item);
})
console.log(val);

const mynum =[1,2,3,4]

const newnums = mynum.filter((num)=>{
    return num>2 //[ 3, 4 ]
})
console.log(newnums);

const num =[];
mynum.forEach((val)=>{
    if(val>1){
        num.push(val);
    }
})
console.log(num); // [ 2, 3, 4 ]

const books =[
    {title:'sahil',genre:'fiction',publish:1986 },
    {title:'mane',genre:'nonfiction',publish:1990}
];

const userbook = books.filter((bk)=> bk.genre=='fiction' );

console.log(userbook);

const userbook1 = books.filter((bk)=>{
   return bk.publish >=1970
})
 
console.log(userbook1)
// [
//     { title: 'sahil', genre: 'fiction', publish: 1986 },
//     { title: 'mane', genre: 'nonfiction', publish: 1990 }
//   ]

const mynum1 = [1,2,3,4,5,6];
//map-------------------------------------------------------------------------
//to add 10 in all 
const myans = mynum1.map((num)=> num+10);
console.log(myans);

mynum1.forEach((num)=>{
    return mynum1.push(num+10);
})

console.log(mynum1);


const mynum3 = mynum1
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>40)
console.log(mynum3);
// [
//     41,  51,  61, 111,
//    121, 131, 141, 151,
//    161
//  ]

//---------------------------------------------------------------------------
//reduce

const array = [1,2,3,4]

const intialvalue=0;
const sumwithintital = array.reduce(
    (acc,currval)=> {
        console.log(currval);
        return acc+currval
    },0)
console.log(sumwithintital); //10

//using arrow function 

const initial =0;
const mytotal = array.reduce((acc,curr)=>acc+curr,initial);
console.log(mytotal);


