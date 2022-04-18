console.log("working"); 
var dest = new Date("May 15, 2022 12:00:00"); //declare the target date and time-->jab tak timer chahiye
var x=setInterval(()=>{
var now = new Date().getTime();
  //current time from jan 1 1970
console.log(now); 
var diff=dest-now; //time remaining in milliseconds 
 //setInterval(function(),intervals after which the function would be executed )

console.log(now);
console.log(diff); 
var days=Math.floor(diff/(24*60*60*1000)); 
var hours=Math.floor(diff/(1*60*60*1000)); 
console.log("No of hours left is "+hours); 
var min=Math.floor(diff/(60*1000)); 
var sec=Math.floor(diff/(1000)); 
console.log("seconds left is "+ sec);
//verify

console.log("min left "+ min); 

console.log("Number of days left is "+ days); 
document.querySelector(".demo").innerHTML= "DAYS: "+ days+" HOURS: "+ hours+" MINUTES: "+min+" SECONDS: "+sec;
},1000);  
//access the inner html and change accordingly 


