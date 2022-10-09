//alert("Hello to JAVa");
//console.log("CHAVALERIASSSSSS");

var table = "Normal Table";
let chair = "One Chair";
console.log(table);
console.log(chair);

let testBoolean = false;
console.log(testBoolean);

let testNumber = 10;
console.log(testNumber);

let testString = 'text';
console.log(testString);

let testFloat = 9.12;
console.log(testFloat);

let testChar = 'c';
console.log(testChar);


let testBooleanObject = new Boolean(false);
console.log(testBooleanObject);

let testNumberObject = new Number(10);
console.log(testNumberObject);

let testStringObject = new String('text');
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
let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let rest = operator_a - operator_b;
let multi = operator_a * operator_b;
let divi = operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(multi);
console.log(divi);

let operator_c = 3;
let operator_d = 3;
let expo = operator_c ** operator_d;
let incr = ++operator_c;
let decr = operator_c--;

console.log(expo);
console.log(++operator_c);
console.log(++operator_c);
console.log(--operator_c);
console.log(--operator_c);
console.log(--operator_c);

//assignment operators

let x = 5;
let y = 6;
console.log(x += 5)
console.log(x -= 5)
console.log(x *= 3)
console.log(x /= 2)

//type0f,null &undefinded

let testBoolean2 = true;
let testNumber2 = 12;
let testString2 = "trueee";
let testBoolean2Object = new Boolean(true);
console.log(typeof (testBoolean2));
console.log(typeof (testNumber2))
console.log(typeof (testString2))
console.log(typeof (testBoolean2Object))

//null
let testNull = null;
console.log(typeof (testNull));

//undefined

let testUndefined;
console.log(testUndefined);

//Array

var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3, 5);
var fourth_array = new Array(3, 5, "Sevilla", true, third_array);
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

fourth_array.splice(1, 0, 'Feb');
console.log(fourth_array);

//for/forEach



for (var i = 0; i < fourth_array.length; i++) {
    console.log("Entramos en la iteración " + fourth_array[i]);
}
for (var i = fourth_array.length - 1; i >= 0; i--) {
    console.log("Second Iteration " + fourth_array[i]);
}
var i = fourth_array.length - 1;
for (; i >= 0; i--) {
    console.log("Third iteration  " + fourth_array[i]);
}
fourth_array.forEach(function (element) {
    console.log("Fourth " + element);

});
//IF,ELSE,ELSEIF

let aux = 0;
if (aux > 0) {
    console.log("This numer is positive");

} else if (aux < 0) {
    console.log("This numer is negative");
} else {
    console.log("This numer is 0");
}

var DNI_REGEX = /^(\d{8})([A-z])$/;
let dni = "10234567l"
if (dni.match(DNI_REGEX)) {
    console.log("CORRECT");

} else {
    console.log("INCORRECT");
}

//Operadores de comparacion

console.log(8 == 8);
console.log(8 == "8");
console.log(8 === 8);
console.log(8 === "8");
console.log("SAL DE AQUI");
console.log(5 > 8);
console.log(5 < 8);
console.log(5 >= 8);
console.log(5 <= 8);
console.log("SAL DE AQUI");
console.log(8 != 8);
console.log(8 != "8");
console.log(8 === 8);
console.log(8 !== "8");
console.log("SAL DE AQUI");
console.log("test" == "test");
console.log("test" === 'test');
console.log("test" == "Test");

//While
var i = 1;
while (i < 10) {
    console.log("the number is " + i);
    i++;
}
console.log(i);

//switch
switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 6:
        console.log("Saturday");
}

//FECHA

let today = new Date();
let first_october = new Date(2022, 9, 1);
console.log(today);
console.log(first_october);
console.log(today.getDay());
switch (first_october.getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}

if (today > first_october) {
    console.log("Today is after");
} else {
    console.log("Today is before");
}
function myFirstFunction() {
    console.log("Thank you for your click");
}
function mySecondFunction() {
    console.log("Thank you for your face,beauty");
}

//select dom
/*
var div=document.getElementById("my_div");
var segundodiv=document.getElementById("my_second_div");
div.classList.add("my_class");
segundodiv.classList.add("my_class");
console.log(div);
console.log(segundodiv);

var div=document.getElementsByTagName("div");
console.log(div);

var second_div=document.querySelector("#my_second_div");
console.log(second_div);

function $(selector){
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));
console.log($(".div_especial"));

//funcion
 function $(selector){
    return  document.querySelectorAll(selector);
}
console.log($("#my_third_div"));

var numbers=[1,2,3,4];

var n_elevator_2=numbers.map(function(n){return n*n;})
console.log(n_elevator_2);

var n_elevator_2 = numbers.map((n) => {return n*n;})

console.log(n_elevator_2);

var n_elevator_2 = numbers.map((n) => {console.log(n+" "+n*n);return n*n;});

console.log(n_elevator_2);

var n_elevator_2 =numbers.map(n => n*n);
console.log(n_elevator_2);

let numbers = [[1, 2], [3, 4], [5, 6], [7, 8]];
let itself = numbers.map(([x, y]) => x * y);
console.log(itself);
*/
//create DOM nodes
/*
$("#btn2").addEventListener("click", function () {
    var input = document.createElement("input");
    console.log(input);


});
function $(selector) {
    return document.querySelector(selector);
}
*/
$("#btn2").addEventListener("click", function () {
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "E-mail");
    input.setAttribute("name", "emails[]");
    $("#form").appendChild(input);
    myAlert("Add new email input");
});
function $(selector) {
    return document.querySelector(selector);

}
function myAlert(msg){
    var div=document.createElement("div");
    div.classList.add("alert");
    div.innerHTML =msg;
    var close= document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML="X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild)
    bind_close();
}


function bind_close(){
    let elements= document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        let el= elements[i];
        el.addEventListener("click",function(){
            this.parentNode.style.display ="none";
        });
    }
}
