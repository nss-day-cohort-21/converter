console.log("converter.js");


// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.



// Get a reference to the button element in the DOM
var tempHolder = document.getElementById("content") ;

//get temp input from text box
let num = document.getElementById('temp-box') ;
num.addEventListener('blur', determineConverter, false);



//button Clicked function
function buttonClicked() {
	buttonHolder = document.getElementById('content');
    buttonHolder.addEventListener('click', determineConverter ['false']);
	
}



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {

		//checked to see if button checked on fahrenheit
		if (document.getElementById("fahrenheit").checked === true) {
			//get the temp to convert from input field
			var temp = document.getElementById('temp-box');
			//take the temp and run it through toFahrenheit function to get result
			toFahrenheit(temp);
			
			



		//checked to see if button checked on celsius	
		}else if (document.getElementById("celsius").checked === true) {
			//get the temp to convert from input field
			var temp = document.getElementById('temp-box').value;
			//take the temp and run it through toCelsius function to get result
			toCelsius(temp);

			



	    //esle notify user to choos an option
		} else {
			document.write('Please select an option');
		}
		return clickEvent;
}


//celsius function
function toCelsius (num) {
	let c = (num - 32) * 5/9;
	document.getElementById("content").innerHTML= c;
	return c;

}

//fahrenheit function
function toFahrenheit (num) {
	let f =  (num * 1.8) + 32;
	document.getElementById("content").innerHTML= f;
	return f;	
}




 
 
 

