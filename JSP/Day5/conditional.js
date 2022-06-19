//Conditional statments
//1> if
// var a=10;
// if (a>9){
//     console.log("if block executed");
// }
// console.log("regular code block");

// if else if
var time = 10;
if (time < 9) {
    greeting = "Good morning";
  } else if (time > 9) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good evening";
  }
//////////////////////////////////////////////////////////////////////////////
//Switch Case
var p=10;
var q=5;
var result='Division';
switch(result){
     case 'Addition':console.log(p+q);
     break;
     case 'Substraction':console.log(p-q);
     break;
     case'Multiplication':console.log(p*q);
     break;
     case'Division':console.log(p/q);
     break;
}

