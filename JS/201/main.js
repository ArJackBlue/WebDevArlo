

       
          window.onload = function (){

          }

          



"use strict";



let x = "thing";

//
//
x = "Something Else"
console.log(x)

 alert("Starting Script...")
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
        alert("that was the last one");
    }
}, 2000)

          const num = 1234;
          if (num === 1234) {
              const greeting ="Hello!";
          }

         console.log(greeting)


          let person1 = "Arlo J Jackson";
          let person2 = "Eric Nord";
         function greeting(){
             alert(`Hello ${person1}`)
         }
         greeting();
         console.log(person2, "Is the second person");


    
      const cat = 3
      try{
        cat = cat + 2 ;
      } catch (error){
        console.warn("you only have three cats.", error)
        cat = cat + 4;
      }
      finally{
        console.log("You have", cat , "cats.")
      }
      // because regardless of finally, the code will still continue
      console.log("SHOW ME!")
