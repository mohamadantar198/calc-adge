function calcAdgeInDayes(){
	"use strict";
	var inputNumber = document.getElementById("year").value,
	    outputNumber = inputNumber * 356,
		mass = document.getElementById("test");
	
	if (inputNumber === "") {
		mass.innerHTML = "This filed cant be empty" ;
	}
	 else if (isNaN(inputNumber)) {
		 mass.innerHTML = "Plz write a number" ;
	 }
		 else if (inputNumber === "0") {
		 mass.innerHTML = "Plz write a number" ;
	 }
		 else if (inputNumber < 0 ) {
		 mass.innerHTML = "Plz write a +number" ;
	 }
	 else {
		 	mass.innerHTML = outputNumber;
	 }
}

function calcAdgeInMonth(){
	"use strict";
	var inputNumber = document.getElementById("year").value,
	    outputNumber = inputNumber * 12,
		mass = document.getElementById("test");
	
	if (inputNumber === "") {
		mass.innerHTML = "This filed cant be empty" ;
	}
	 else if (isNaN(inputNumber)) {
		 mass.innerHTML = "Plz write a number" ;
	 }
		 else if (inputNumber === "0") {
		 mass.innerHTML = "Plz write a number" ;
	 }
		 else if (inputNumber < 0 ) {
		 mass.innerHTML = "Plz write a +number" ;
	 }
	 else {
		 	mass.innerHTML = outputNumber;
	 }
}
function calcAdgeInHours(){
	"use strict";
	var inputNumber = document.getElementById("year").value,
	    outputNumber = inputNumber * 356 * 24,
		mass = document.getElementById("test");
	
			if (inputNumber === "") {
		mass.innerHTML = "This filed cant be empty" ;
	}
	 else if (isNaN(inputNumber)) {
		 mass.innerHTML = "Plz write a number" ;
	 }
		 else if (inputNumber === "0") {
		 mass.innerHTML = "Plz write a number" ;
	 }
		 else if (inputNumber < 0 ) {
		 mass.innerHTML = "Plz write a +number" ;
	 }
	 else {
		 	mass.innerHTML = outputNumber;
	 }
}	
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			