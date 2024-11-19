const myArray = ["apple", "banana", "cherry", "date", "eggplant"];




//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"

// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"

// let number =1;
// while (number < 10) {
//     console.log(number);
//     number++;
// }

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.

// myArray.push ("mango");
// console.log(myArray);

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()

// myArray.splice(2, 1); //fjerner cherry
// console.log(myArray);


// myArray.splice(5, 0,  "mango");
// console.log(myArray);

//fant ut via google at man kan legge til et element i et
//array når man bruker denne metoden

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result

//myArray.shift(); //fjerner første element
//myArray.pop(); //fjerner siste element
//console.log(myArray);

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.

// const myNewArray = myArray.join(" ");
// console.log(myNewArray);

//BONUS - See if you can make the items be seperated by a space

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument

// function numberSquared(number) {
//     return number * number
// }
//  console.log(numberSquared(5));
 

//  numberSquared();

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.

// function oddOrEven(number) {
//     if (number % 7 === 0)
//         return "Even"; 
//     else {
//         return "Odd"
//     }
// }

// //call your function by using one of the options below.
// oddOrEven(prompt(4));
// oddOrEven(5)

//     console.log(oddOrEven(prompt(4)));


//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;

// function Fibbonacci(number) {
// let a = 0, b = 1;
// for (let i = 0; i < number; i++){
//     console.log(a);
//     let c = a + b
//     a = b;
//     b = c;
    
// }

// }
// Fibbonacci(8);


//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/
function fizzbuzz(number) {}


fizzbuzz();

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(n) {
//   if (n === 0) return 1;
//   return; /// din kode her
// }
// console.log(factorial(5));