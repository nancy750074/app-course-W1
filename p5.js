function b1(){
  var myVar;
	console.log(myVar);
}

function a1(){
	var myVar = 1;
	b1();
	console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a1();

function b2(){
	console.log(myVar);
}

function a2(){
	var myVar = 1;
	b2();
	console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a2();

function a3(){
	var myVar = 1;
	function b3(){
		console.log(myVar);
	}
	b3();
	console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a3();

var firstname = 'Simon';
var addSurname = () => {
	var surname = 'Holmes';
	var fullname = firstname + ' ' + surname;
	console.log(fullname);
}
addSurname();

var firstname = 'Simon';
var addSurname = () => {
	var surname = 'Holmes';
	var fullname = firstname + ' ' + surname;
  var firstname = 'David';
	console.log(fullname);
}
addSurname();