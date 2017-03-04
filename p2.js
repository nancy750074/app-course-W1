function greet(){
	console.log('HAPPY');
}
greet();

function logGreeting(fn){
	fn();
}

logGreeting(greet);

var greetMe = function() {
	console.log('HAPPY NEW YEAR');
}
greetMe();

logGreeting(greetMe);
