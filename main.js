//- A function that subtracts two numbers and returns the result
//- Each function will have 2 parameters, `num1`, `num2`
//- On the console the prompt will print to the user:
//- *Please enter your first number* (store that number)
//- *Please enter your second number* (store that number)
//- *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
//- Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
//- You will then print to the console: *The result is: [the result]*



var readlineSync = require('readline-sync');


//- A function that adds two numbers and returns the result
function sum(num1, num2){
    return num1 + num2
}
// Calling the sum function (excute)
var result_sum = sum(10,5)
console.log(result_sum)





//- A function that multiplies two numbers and returns the result
function product(num1, num2){
    return num1 * num2
}
// Calling the product function (excute)
var result_product = sum(5,5)
console.log(result_product)





//- A function that divides two numbers and returns the result
function divide(num1, num2){
    return num1 / num2
}

// Calling the product function (excute)
var result_divide = sum(5,25)
console.log(result_divide)





//- A function that subtracts two numbers and returns the result
function minus(num1, num2){
    return num1 - num2
}
// Calling the minus function (excute)
var result = minus(10,5)
console.log(result)


//- *Please enter your first number* (store that number)

var getNumbers = ""

function logName() {
    console.log(myName);
  }


