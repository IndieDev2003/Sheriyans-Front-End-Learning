var number=13;
const pie=3.14;

console.log("Number is Var with Value Of :",number);
console.log("Pie is Constant with Value Of :",pie);


//conditions statements in Javascript

var cond=2;

if(cond<15){
  console.log("If this block is running then \n Condition Is True and Value of Var is <15 Value :",cond);    
}else{
    console.log("If this block is runing that means Condition is False and Value of cond is >15 Value: ",cond)
}

//if else ladder statements

if(cond>12){
    console.log("Cond Value is Grater than 13, Value:",cond);
}else if(cond==14 && cond<15){
    console.log("Cond value is equal to 14 and less than 15, Value: ",cond);
}
else{
    console.log("Cond is failed to pass any statement given in if-else ladder");
}

//loops in Javascript

console.log("Demostartion Of Loops In Javascript.")
console.log("For Loop Start From Here");


for(var i=0;i<11;i++){
    console.log(i);
}

console.log("While Loop Start From Here");
var wh=10
while(wh<25){
    console.log("Value of wh: ",wh);
    wh++;
}

console.log("Demonstartion of functions start from here");
function Bike(){
    console.log("Open Lock");
    console.log("Start Ignition");
    console.log("Check Fuel");
    console.log("Kick Start");
    console.log("Check Side Stand");
}

console.log("Call Bike Function by using bike(); ");


console.log("This is demonstrationof Arrays.");

var arr=[12,2,36,89,863,57];
 console.log("Value In Array Named arr: ",arr);

 console.log("Before Using Pop method on Array named arr:",arr);
 arr.pop();
 console.log("After Using Pop method on Array named arr:",arr);

 console.log("before using push(90) method in Array named arr: ",arr);
 arr.push(90);
 console.log("after using push(90) method in Array named arr: ",arr);

console.log("Before using shift() in Array named arr: ",arr);
arr.shift();
console.log("After using shift() in Array named arr: ",arr);

console.log("Before using the unshift(39) method in Array named arr: ",arr);
arr.unshift(39);
console.log("After using the unshift(39) method in Array named arr: ",arr);

console.log("Before using splice(3,5) in Array named arr: ",arr);
arr.splice(3,5);
console.log("After using the splice(3,4) in Array named arr: ",arr);

console.log("Demonstration of objects in JavaScript by using watch as Object: ")
console.log("watch have written below propeties:");
console.log("brand:Titan");
console.log("price:16000");
console.log("color:black-gold");
console.log("digital:false");

var watch={
    brand:"Titan",
    price:16000,
    color:"black-gold",
    digital:false

}


