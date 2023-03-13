"use strict";



let x = "thing";

//
//
x = "Something Else"
console.log(x)

 console.log("Starting Script...")
setTimeout(function(){
    console.log("Waited 3 Seconds");
}, 3000)


let count = 0;
const interval = setInterval(function(){
    console.log("checking something...")
    count++;
    
    if( count === 3){
        //unset the interval
        clearInterval(interval)
        console.log("that was the last one");
    }
}, 2000)