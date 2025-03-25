const marvel =["sahil","amit"];
const dc = ["ramesh","jaya"];

marvel.push(dc);
console.log(marvel);
//[ 'sahil', 'amit', [ 'ramesh', 'jaya' ] ]

console.log(marvel[2][1]);
//jaya  

marvel.concat(dc);
console.log(marvel);
//[ 'sahil', 'amit', [ 'ramesh', 'jaya' ] ]

//spread used to merge two arrays
const merged = [...marvel,...dc];
console.log(merged);
//[ 'sahil', 'amit', 'ramesh', 'jaya' ]

//flat opeartor help to flaten the array
const another =[1,2,3,[4,5,[6,7,8]]];
const real = another.flat(3); //1 is the depth
console.log(real);
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]

console.log(Array.isArray(real));
//true
console.log(Array.isArray("sahil"));
//false
console.log(Array.from("sahil"));
//[ 's', 'a', 'h', 'i', 'l' ]

console.log(Array.from([1,2,3],x=>x*2));
//[ 2, 4, 6 ]

console.log(Array.from([1,2,3],function(x){return x*2}));
//[ 2, 4, 6 ]

console.log(Array.from({name:"sahil"})); //intresting case;
//[]
console.log(Array.from({length:5},(x,i)=>i));
//[ 0, 1, 2, 3, 4 ]

let score = 100;
let score2 = 200;
let score3 = 300;

let scores = Array.of(score,score2,score3);
console.log(scores);
//[ 100, 200, 300 ]

