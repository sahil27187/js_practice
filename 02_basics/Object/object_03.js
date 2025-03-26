//destructuring 
const course ={
    name: 'JavaScript',
    duration: '3 months',
    topics: ['variables', 'loops', 'functions']
}

const{name,duration,topics}=course;
console.log(name);
console.log(duration); //destructuring of object
console.log(topics);

const{name:n,duration:d,topics:t}=course;
console.log(n);
console.log(d);
console.log(t);
// this is desreucturing of object

//------------------------------------------------------------------------
//API concept
//API is Application Programming Interface
//API is a set of rules and protocols that allows one software application to communicate with another
//API is a software intermediary that allows two applications to talk to each other
//API is a way to access the functionality of an application
//api is in jsson format;
{
    {},
    {},
    {},
    {}
}