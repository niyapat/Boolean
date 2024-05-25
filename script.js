// What is boolean ??
// yes or no
// true or false

// A boolean data type represents one of the two values:true or false
// Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

// let isLightOn = "true"; // just a simple text / string
// let isLightOff = true; // boolean data type
// console.log(isLightOn);
// console.log(isLightOff);

// let a = 4 > 3;
// console.log(a);
// let b = 5 < 2;
// console.log(b);

// ******************************

// Truthy values
// ** All numbers(positive and negative) are truthy except zero
// ** All strings are truthy except an empty string ('')
// The boolean true

// Falsy values
// ** 0
// ** 0n
// ** null
// ** undefined
// ** NaN // not a number
// ** the boolean false
// ** '', "", ``, empty string

// *********************

// let firstName;
// console.log(firstName);

// let empty = null;
//no value
// console.log(empty);

// *************************

// console.log("1-", 3 > 2); // true
// console.log("2-",3 >= 2); //true
// console.log("3-",3 < 2);  // false
// console.log("4-",2 < 3); // true
// console.log("5-",2 <= 3); //true
// console.log("6-",3 == 2); //false
// console.log("7-",3 != 2); // true
// console.log("8-",3 == "3"); //true
// console.log("9-",3 === "3"); //false
// console.log("10-",3 !== "3"); // true
// console.log("11-",3 != 3); // false
// console.log("12-",3 !== 3); // false
// console.log("13-",0 == false); //true
// console.log("14-",0 === false); //false
// console.log("15-",0 == ""); //true
// console.log("16-",0 == " ");  //true
// console.log("17-",0 === ""); //false
// console.log("18-",1 == true); //true
// console.log("19-",1 === true); //false
// console.log("20-",undefined == null); //true
// console.log("21-",undefined === null); //false
// console.log("22-",NaN == NaN); //false
// console.log("23-",NaN === NaN); // false
// console.log("24-",typeof NaN); //number

// 2 == "3" //false
// 2 == "2" //true
// 2 == 2  // true
// 5== 10 //false

// == comparision

// 2 === "2" // false
// 2 === 2  // true
// === strict equality

// *************************************

// pre and post increment

// let count = 10;
// let preCount = ++count;

// console.log("pre count value= ", preCount);

// let another = 15
// console.log("post count value= ", another++);
// console.log("post count value= ", another);
// console.log("post count value= ", another++);
// console.log("post count value= ", another);

// Program to Check for Valid Age for Voting

// function canVote(age) {
// 	return age >= 18;
// }
// console.log(canVote(15));

// ***********************

// if and else statement

// 1. Check if a number is positive or negative

// function check(n) {
// 	if (n > 0) {
// 		console.log(n + " is positive");
// 	} else {
//         console.log(n + " is not positive");
//     }
// }
// check(-5);
// check(8)

// ***********************

// Check if a person is of voting age

// function validVoter(age){
//     if(age>=18) {

//         console.log("You are a valid voter");
//     } else{
//         console.log("Sorry, you are not eligible to vote");
//     }
// }
// validVoter(20);
// validVoter(10);

// *************************

// Check if a person is of voting age with prompt

// function vote() {
// 	let age = prompt("Please enter your age");
// 	age = parseInt(age, 10);
// 	if (isNaN(age)) {
// 		alert("That is not a valid number");
// 	} else if (age < 18) {
// 		alert("Sorry, you are not eligible to vote.");
// 	} else if (age > 99) {
// 		alert("Age cannot be greater than 99");
// 	} else {
// 		alert("Congratulations! You can vote!"); // age 18 -99
// 	}
// }

// ***************************************

// Check for membership discounts

function applyDiscount(a) {
	if (a) {
		console.log("15% discount");
	} else {
		console.log("No discount");
	}
}
// applyDiscount(false);
// applyDiscount(true);

// *************************** 

// WAP 

// Determine if a year is a leap year 

// Grading system 

// Check if a number is positive or negative 

// Check if a number is even or odd