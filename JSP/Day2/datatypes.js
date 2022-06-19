// Datatypes:-

//Primitive Data type
var a;
var num = 6;//number
var str ="number";//string
var res = true;//boolean
var empty = null;//null
var total = undefined;
console.log(a);//undifined
console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(res));

// Non-primitive Datatype:- Object
var obj={
    name : "Chaitrali",
    age : 21,
    isapplicable: 'yes',
    method: function(){
        console.log('object')
    } ,
    hobbies:['singing', 'playing']
}
for(var key in obj){
    console.log(key,obj[key]);
}

///////////////////
//dot notation
var myobj = {};
myobj.name ="abc";
myobj.compName ="claritech";
console.log(myobj);
