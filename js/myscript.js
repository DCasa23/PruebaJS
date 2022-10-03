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
*/
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