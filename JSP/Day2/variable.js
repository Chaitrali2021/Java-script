//Variables are containers for storing data (storing data values).
// 4 Ways to Declare a JavaScript Variable:
//Using var, let, const, nothing

//Ex1:- using var
var a = 6;
var b = 6;
var c = a + b;
console.log(c);

//Ex2:- using let
let x = 5;
let y = 3;
let z = x - y;
console.log(z);

//Ex3:- const variable cannot be reassigned
const p=3.14;
console.log(p);

//Ex4:- undeclared variables
q=2;
r=2;
s=q/r;
console.log(s);

// typeof is used for datatype
//typeof(d)
// console.log(d);
var _chaitrali = "my name is chaitrali ";

var chaitraliName = "this is camelcase";

var $chaitrali = "this special char";
var CAPS = "this is uppercase";

// var 1chaitrali = "this is not allow to declare js name";
/* 
we can not start with number in variable name
*/
var chaitrali1 = "this is not allow to declare js name";
var $chaitrali1dtext = "test"

// console.log(_chaitrali,CAPS,chaitrali1,$chaitrali1dtext);
// console.log(chaitraliName)
// console.log(chaitrali)

//local scope and global scope of variable
var abcGlobal ="this is global variable"; //global variable
console.log(abcGlobal);

function myFunction(){
    var localScopevar = "this is inside the function";//local variable
}
myFunction();

// console.log(abcGlobal);
// console.log(localScopevar);

