//alert("Hello to JAVa");
//console.log("CHAVALERIASSSSSS");

var table= "Normal Table";
let chair= "One Chair";
console.log(table);
console.log(chair);

let testBoolean= false;
console.log(testBoolean);

let testNumber= 10;
console.log(testNumber);

let testString= 'text';
console.log(testString);

let testFloat= 9.12;
console.log(testFloat);

let testChar= 'c';
console.log(testChar);


let testBooleanObject=  new Boolean(false);
console.log(testBooleanObject);

let testNumberObject= new Number(10);
console.log(testNumberObject);

let testStringObject= new String('text');
console.log(testStringObject);

/*//Concatenación variables

let personname="John";

let surname="Doe";

let question="How are you "+personname+" "+surname+"?" ;
console.log(question);

//Toi ES6 we can use backtick to create interpolated strings

let personname="John";

let surname="Doe";

let age= 23;
let question=`How old is ${personname} ${surname}?` ;

let question2="How are you ".concat(surname)+" ".concat(personname)
let answer="He is "+age+" years";
console.log(question);
console.log(answer);
console.log(question2);

*/
//Arithmetic operations
//Sum,Rest,Multiplication or Division
let operator_a=12;
let operator_b=6;
let sum=operator_a + operator_b;
let rest=operator_a - operator_b;
let multi=operator_a * operator_b;
let divi=operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(multi);
console.log(divi);

let operator_c=3;
let operator_d=3;
let expo=operator_c ** operator_d;
let incr=++operator_c;
let decr=operator_c--;

console.log(expo);
console.log(++operator_c);
console.log(++operator_c);
console.log(--operator_c);
console.log(--operator_c);
console.log(--operator_c);

//assignment operators

let x=5;
let y=6;
 console.log(x+=5)
 console.log(x-=5)
 console.log(x*=3)
 console.log(x/=2)

 //type0f,null &undefinded

 let testBoolean2 =true;
 let testNumber2 =12;
 let testString2 ="trueee";
 let testBoolean2Object = new Boolean(true);
 console.log(typeof(testBoolean2));
 console.log(typeof(testNumber2))
 console.log(typeof(testString2))
 console.log(typeof(testBoolean2Object))

 //null
  let testNull=null;
  console.log(typeof(testNull));

  //undefined

  let testUndefined;
  console.log(testUndefined);

  //Array

  var first_array=[];
  var second_array= new Array(3);
  var third_array= new Array(3,5);
  var fourth_array= new Array(3,5,"Sevilla",true,third_array);
  console.log(first_array);
  console.log(second_array);
  console.log(third_array);
  console.log(fourth_array);

  //Array access

  console.log(third_array[1]);
  console.log(fourth_array[4][0]);

  //Array length
  console.log(fourth_array.length);

//Array Push
  console.log(fourth_array.push("Italias"));
  console.log(fourth_array);

  fourth_array.unshift("hola");
  console.log(fourth_array);

  fourth_array.splice(1,0,'Feb');
  console.log(fourth_array);

//for/forEach



for(var i=0; i<fourth_array.length;i++){
    console.log("Entramos en la iteración "+ fourth_array[i]);
}
for(var i=fourth_array.length-1;i>=0;i--){
    console.log("Second Iteration "+ fourth_array[i]);
}
var i= fourth_array.length-1;
for(;i>=0;i--){
    console.log("Third iteration  "+fourth_array[i]);
}
fourth_array.forEach(function(element){
    console.log("Fourth "+element);

});
