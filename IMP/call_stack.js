//javascript Execution Context
// 1. Global Execution Context -{} this is the default context, where all the code runs in the global scope.
//for brower it is window object and for node it is global object
// 2. Function Execution Context - {} this is created when a function is invoked. Each function has its own execution context.
//for example, when a function is called, a new execution context is created for that function. This context contains the function's arguments, local variables, and the value of this keyword. The function's execution context is pushed onto the call stack when the function is invoked and popped off when the function returns.

// 3. Eval Execution Context - {} this is created when the eval() function is called. This is a special case and is not commonly used.
//for example, when the eval() function is called, a new execution context is created for the code that is passed to it. This context contains the variables and functions defined in the eval() code. The eval() execution context is pushed onto the call stack when the eval() function is invoked and popped off when the eval() function returns.


// java script execution happens in two phases:
// 1) memory creation phase - this is the first phase of the execution context. In this phase, the JavaScript engine creates a global object and a scope chain. The global object is created and the scope chain is created. The scope chain is created by creating a new object for each function that is defined in the global scope. The scope chain is used to look up variables and functions in the current execution context and in the parent execution contexts.
// 2) code execution phase - this is the second phase of the execution context. In this phase, the JavaScript engine executes the code in the global scope and in the function scope. The code is executed line by line and the variables and functions are looked up in the scope chain. The code execution phase is where the JavaScript engine executes the code and returns the result.

// EG ->

let num1 =10;
let num2 =20;
function addtwo(num1,num2){
    return num1+num2;
}
addtwo(num1,num2);
addtwo(5,10);

// 1) first step is creation of global enviroment and setting the varible in this keyword
// 2) memory phase is assigned to varible initilly with undefined and then the code is executed line by line.
// 3) for addtwo fucntion defination goes in memory and the function is assigned to the variable addtwo.
// 4) now we go in execution pahse and the val1 an val are assigned to the values passed in the function.

// 5) addtwo creae a sepeate execution context and the function is invoked.
// 6) again in that sandbox a new memory is created and the function is executed line by line.
// 7) the function is executed and the result is returned to the global execution context.
// return happebs to global exectuion context and the value is returned to the global execution context.
// anf the new sandox id deleted or popped off from the call stack.

