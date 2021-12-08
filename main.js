//- A function that subtracts two numbers and returns the result
//- Each function will have 2 parameters, `num1`, `num2`
//- On the console the prompt will print to the user:
//- *Please enter your first number* (store that number)
//- *Please enter your second number* (store that number)
//- *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
//- Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
//- You will then print to the console: *The result is: [the result]*



var readlineSync = require('readline-sync');


var userName = readlineSync.question('Whats Your Name?')
console.log('Hi ' + userName + ' lets do some math')

let number1 = readlineSync.question('pick number')
let number2 = readlineSync.question('Now pick another number')
var

// Setting Var

var num1 = readlineSync.question('Enter your first number: ')
var num2 = readlineSync.question ('Enter your second number: ')
var userOperator = readlineSync.question('Enter operation you wish to use: to add. - to subtract, * to multiply, / to divide:')

//All Pass Through Funtions 


//- A function that adds two numbers and returns the result
function addNumbers(num1, num2){
    return num1 + num2
}
// Calling the sum function (excute)
var result_sum = addNumbers(10,5)
console.log(result_sum)





//- A function that multiplies two numbers and returns the result
function multiplyNumbers(num1, num2){
    return num1 * num2
}
// Calling the product function (excute)
var result_product = sum(5,5)
console.log(result_product)




//- A function that divides two numbers and returns the result
function divideNumbers(num1, num2){
    return num1 / num2
}

// Calling the product function (excute)
var result_divide = sum(5,25)
console.log(result_divide)



//- A function that subtracts two numbers and returns the result
function subtractNumbers(num1, num2){
    return num1 - num2
}
// Calling the minus function (excute)
var result = minus(10,5)
console.log(result)


let number1 = readlineSync.question('Pick A Number: ')
let number1 = readlineSync.question('Now Pick A Differnet Number: ')


// Math Operators// 
 operators = ['add','sub','multi','div']
 index = readlineSync.keyInSelect(operators, 'Which operations?')
