var greetMe = function(){
    console.log('hi');
  }
greetMe();

greetSam=()=>console.log('hello');
greetSam();

greetYou=name=>console.log('happy'+name+'!');
greetYou('NTUE');


var square1=function(num){return num*num};
var square2=num=>{return num*num};
var square3=num=>num*num;

console.log(square1(1)); 
console.log(square2(2)); 
console.log(square3(3));