/* 
The If statment is used to state conditions, it is used to perform a specific action if a confition is met, it would only perform that action once.
It can be nested and also i takes a topdown approach.
*/

/* THE IF SYNTAX
if(condition){
    Statement;
}
*/

//let us assume I want to print a result if my age is less than 18

let age1 = 8;
if(age1 < 18){
   document.getElementById("output").innerHTML = "You are a child";
}

//In a case where it doesn't meet the above stated condition, rather than have the system display blank or fail, we can output a result using the ELSE block

/* THE IF ELSE SYNTAX
if(condition){
    Statement;
}else{
    statement;
}
*/

let age2 = 24;
if(age2 < 18){
    document.getElementById("output").innerHTML = "You are a child";
 }else{
     document.getElementById("output").innerHTML = "You are grown";
 }

//Let us say we have more than one conditions and we need to check throught this conditions, then we can can use IF ELSEIF ELSE

let age3 = 66;
if(age3 < 18){
    document.getElementById("output").innerHTML = "You are a child";
}
else if(age3 < 65){
    document.getElementById("output").innerHTML = "You are grown";
}
else{
    document.getElementById("output").innerHTML = "You are old";
}

//using checked notation in JS

document.getElementById("submit").onclick = function(){
    if(document.getElementById("checkBox").checked){
        console.log("working, checked");
        document.getElementById("labelCheckBox").innerHTML = "Subscribed";
    }else{
        document.getElementById("labelCheckBox").innerHTML = "Subscribe";
    }
}

//using switch

// switch = statement that examines a value 
//                 for a match against many case clauses.
//                 More efficient that many "else if" statements

let grade = "A";

switch(grade){
 
    case "A":
      console.log("You did great!");
      break;
   
    case "B":
      console.log("You did good!");
      break;
 
    case "C":
      console.log("You did okay!");
      break;
 
    case "D":
      console.log("You passed ... barely");
      break;
 
    case "F":
      console.log("YOU FAILED!");
      break;
  
    default:
      console.log(grade, "is not a letter grade");
}

/*
let grade = 95;

switch(true){

    case grade >= 90:
        console.log("You did great!");
        break;

    case grade >= 80:
        console.log("You did good!");
        break;

    case grade >= 70:
        console.log("You did okay!");
        break;

    case grade >= 60:
        console.log("You passed ... barely");
        break;

    case grade > 60:
        console.log("You FAILED!");
        break;

    default:
        console.log(grade, "is not a letter grade!");
}
*/