console.log("Page Loaded script.js");

var website = "https://codingforeverybody.com/";
var studentName = "Arlo Jackson";
console.log(studentName);

// Const cannot be changed NEVER be changed, let can be rewritten

let apples = 4;
const height = "5'9\"";
//   console.log("i have", apples, "apples.");
//  console.log("I am", height);

// let cats = 3;
/*const seniorCat = "lils";
const kitten = "onyx"; 
console.log ( "I have", cats ,"cats");*/

// console.warn(" Youngest is", kitten)
//JavaScript Data types
// let profession = "Student";

const str = "A String"; 
const num = 4; 
const flt = 2.14; 
const bool = true; 
const list = ["item 1", 2, "three", 4.25, []]; 
const thing = null; 
const notDefined = undefined; 

const getAge = function () {
  return 17;
}; 
const obj = {
  name: "Arlo",
  profession: "Student",
}; 


const age = 17;
if (age >= 16) {
  console.log("I can get a job");
}

if (age >= 21) {
  console.log("I can drink.");
} else {
  console.log(" Not old enough to drink");
}

const name = "Arlo";

if (name == "Nathan") {
  console.log("welcome, Nathan!");
} else if (name == "Arlo") {
  console.log("Hello Arlo!");
}

function addNumbers(num1, num2) {
  const total = num1 + num2;
  return total;
}

const addedTotal = addNumbers(1, 9);

function greeting(name) {
  return `Hello ${name}`;
}
const mentor = greeting("Eric");
document.getElementById("demo").innerHTML =
  "Data Structures " + str + num + flt;
