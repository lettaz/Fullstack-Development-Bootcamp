/*
on this course i would introduce you to variables and its usage across different datatypes.
Variables are data holders, they hold date of a specific type on at a time and behave like the date the hold.

For example:
Let's take a trip down memory lane.
Remember when we have question s like 2a + b = c, where a = 3 and b=4 find c.

This is similar to what variable does, "a" is a data holder, holding the 3 which is a number, hence a would be have asa number and would only be called as a number in future programs.

Let us represent that question programmactically.

 CALLING OR INITIATIATING A VARIABLE.
 1. To initiaite a variable, you either use let, var, const (explain later).
 2. Then comes the assignment, this step can be done in step one.
*/

//2a + b = c, where a = 3 and b=4 find c.

let a = 3;
let b = 4;
let c;

c = 2 * a + b;

console.log(c);

/*
From the above expression i represented the arithmetic expression programmatically, the result would be seen on the console.
I assign a to 3 and b to 4 and the assign the result of the equation to c, the i printed c in the console.

Notice that for a and b and i did the assignment on the same line, the for c, i had to do it on another line, we do this incase we need users input or a declaration of value first.
*/

/* DATA TYPES */
/*
For JS we would be concerned wih three major primitive data types which are String, Number and Boolean

String is represented differently from numbers, although it can be easily mistaken.

Check the example below
*/

let age = 12; //This is a number
let myage = "12"; // This is a string

/*
Now the difference here is that you can not person arithemetic operations with strings but you can do that with numbers.
Take for example you try to add 1 to the string, it would print out 121, but to the number it would print 13.

Try the expression below
*/
let mynewage = myage + 1; 
let myrealage = age + 1;
console.log(mynewage); //prints 121
console.log(myrealage); //prints 12

//Finally you can actually express results on the html file, to do this i would create a paragraph on index.html and then i would add an id(let's call the id - result) to it. Now we want c which is the result from our arithemetic problem to be printed on the html file

document.getElementById("result").innerHTML = c;