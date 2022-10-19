
var testArray= [10,1,2,3,8,6,4,5,15,9,16];
testArray.sort();
console.log(testArray);

testArray.sort();

function sortNumber(a,b){
    return a-b;

}
console.log(testArray.sort(sortNumber));

var testString="a,b,c,d,e,f,2,4,5";
var testArray=testString.split(",");
var testJoin=testArray.join(".");
console.log(testJoin);

//Filter
var testArray =[10,2,3,5,9];
var pairnumber=testArray.filter((num)=>{
    return num%2 ===0;

})
console.log(pairnumber);

//MAP

var testArray=[1,2,3,5,7];
var testArray2=testArray.map(function(num){
    return num*num;
})
console.log(testArray2);
//CALLBACKS
setTimeout(function(){
    console.log("Hellow World");
},2500);

//Closures
document.getElementById("btn").addEventListener("Click",()=>{
    console.log("Click Detected");
});
//Closures II
//In this way

(function(){
    document.getElementById("btn").addEventListener("click",()=>{
        console.log("Click detected");
    });
})();
//JSON
var course={
    title: "Course JS Advanced",
    section:4,
    subsection:6,
    teacher:"Javier Prada",
    intro:function(){
        console.log("Welcome to "+this.title+" with "+this.section+" sections");
        this.function2();
    },
    function2:function(){
        console.log("Into to second function");
    }
}
console.log(course["teacher"]);
console.log(course.title);
course.intro();

