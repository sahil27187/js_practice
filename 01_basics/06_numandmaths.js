const score = 400.56;
const num = new Number(3423423);

console.log(num);
console.log(score);
console.log(num.__proto__);
console.log(score.__proto__);
console.log(num.toFixed(3));
console.log(score.toPrecision(4));
console.log(num.toString());
console.log(num.valueOf());
console.log(num.toLocaleString('en-IN'));


//------------------------------MAths-----------------------------

console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-5));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.round(5.5));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log((Math.random(20) *10)+1);
console.log(Math.trunc(5.9));
const max = 20;
const min = 10;
console.log((Math.floor(Math.random()*(20-10+1))+10));


