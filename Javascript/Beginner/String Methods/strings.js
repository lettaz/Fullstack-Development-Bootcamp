// useful string properties & methods

let userName = "Bro Code";
let phoneNumber = "123-456-7890";
//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);

//Write a program to get the first character of a string

let input = window.prompt("Input your string");
input = input.trim();

number_of_character = input.length;
last_index_of_input = number_of_character - 1
console.log(number_of_character);
fLetter = input.charAt(0);
console.log(fLetter);

lastLetter = input.charAt(last_index_of_input);
console.log(lastLetter);

