var info = document.getElementsByClassName("demos")
    info[0].innerHTML = "first element index 0";
    info[1].innerHTML = " first element index 1";
    info[2].innerHTML = " first element index 2";
    info[3].innerHTML = " first element index 3";


let student1 = "Leonardo";
let student2 = "Raphael";
let student3 = "Donatello";
let student4 = "Michalangelo";

let content = "The name of the student 1 is : " + student1 + "<br>";
content  += "The name of the student 2 is : " + student2 + "<br>";
content  += "The name of the student 3 is : " + student3 + "<br>";
content  += "The name of the student 4 is : " + student4 + "<br>";

let info1 = document.getElementById("demo");
info1.innerHTML = content;

let studentArray = ["Leonardo", "Raphael", "Donatello", "Michalangelo"]; 
console.log("the first student name is: " + studentArray[2]);




// 	let userDetails = [];
// 	userDetails[0] = prompt("What is your name?");
// 	userDetails[1] = prompt("What is last name?");
// 	userDetails[2] = prompt("How old are you");
// document.getElementById("here").innerHTML ="User is " + userDetails[0] + " " 
// +  userDetails[1] + " " + userDetails[2];




	let contactInfo = [];
	contactInfo[0] = "Saygin Guven";
	contactInfo[1] = 34;
	contactInfo[2] = false;
	//using just array name will print out all the elements seperated by ,
	document.getElementById("here1").innerHTML = contactInfo;

	//array methods
let colorArrays = ["red","orange","yellow","green", "blue",
 "purple", "school bus"];
	//this will pop the last element from the array
	colorArrays.pop();
	document.getElementById("here2").innerHTML = colorArrays;



	let studentsArray = ["Leonardo", "Raphael", "Donatello", "Michalangelo"];
	studentsArray.push("Splinter");	
	document.getElementById("here3").innerHTML = studentsArray;


	let coffeeStores = ["starbucks","tim hortons", "tree house", "brain station","wave","second cup", "blendz coffee"]; 
	coffeeStores.shift();
	document.getElementById("here4").innerHTML = coffeeStores;

	let coffeeStores1 = ["starbucks","tim hortons", "tree house", "brain station","wave","second cup", "blendz coffee"]; 
	coffeeStores1.unshift("coffee company");
	document.getElementById("here5").innerHTML = coffeeStores1;

	let languagesArray = ["Portuguese", "Indian", "Japanese", "Ukranian"];

	languagesArray.splice(2,1,"English","Spanish")
	document.getElementById("here6").innerHTML = languagesArray;









