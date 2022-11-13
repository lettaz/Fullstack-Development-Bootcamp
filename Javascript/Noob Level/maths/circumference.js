//Solve for the circumference of a circle, asking for user input

/* 
The formula for the circumference of a circle is 2*PI* radius squared.

We would have to first identify the constants and assign its value, then we promp the user to iunputs it radius and then we solve for the circumference
*/

const PI = Math.PI; //Used maths method to get the exact value of PI and assign to the variable PI using "const", which means i can't change the value of Pi across this program.
let radius = window.prompt("Input the radius"); // Ask user to input the radius
radius = Number(radius); //Convert the input from string to a number

let result;

result = 2 * PI * Math.pow(radius,2); // The calculation

console.log("The circuference is",result); // Prints the result

