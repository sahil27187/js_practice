//jan1 1970 is the strat of the time
// Date and Time
// Date and time in JavaScript are represented with the Date object. We can create a new date object using the new keyword. The Date object contains methods that allow you to get and set the date and time.

// Creating a new date
let mydate = new Date();
console.log(mydate);
// Output: 2021-08-27T07:43:00.000Z
console.log(mydate.toDateString());
// Output: Fri Aug 27 2021
console.log(mydate.toTimeString());
// Output: 13:13:00 GMT+0530 (India Standard Time)
console.log(mydate.toISOString());
// Output: 2021-08-27T07:43:00.000Z
console.log(mydate.toLocaleDateString());
// Output: 8/27/2021
console.log(mydate.toLocaleTimeString());
// Output: 1:13:00 PM
console.log(typeof mydate);
// Output: object

let myCreadtedDate = new Date(2025,0,8);
console.log(myCreadtedDate.toDateString());
//Wed Jan 08 2025 means 0 is january and 8 is the date
//2025-01-07T18:30:00.000Z

let myCreadtedDate1 = new Date("2024-03-08");
console.log(myCreadtedDate1.toLocaleString());
//3/8/2024, 5:30:00 AM
//Mon Mar 08 2024

let myTimeStamp =  Date.now();
console.log(myTimeStamp);
//1741441038346
console.log(myCreadtedDate.getTime());

//to seconds
console.log(Math.floor(myCreadtedDate.getTime()/1000));
//1736274600
console.log(Math.floor(myCreadtedDate1.getMonth()));
//2


console.log(`the year is ${myCreadtedDate.getFullYear()} and the month is ${myCreadtedDate.getMonth()} and the date is ${myCreadtedDate.getDate()}`);

console.log(myCreadtedDate.toLocaleString('en-US', { weekday: 'short' }));

