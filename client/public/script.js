
function main() {
	createButton();
	addEventListener1();
	
	createButton2();
	addEventListener2();
	createGreetingButtons();
	addEventListenerByClass();

	createNewButton();
	addEventListener6();
	showAnchestors();

	addEventListenerToShowAllTheButtons();

	createInput();
	addInputEventListener();

	addInputEventListener2()
}

window.addEventListener("load", main);


const meButton = `<button id='me'>Click me!</button>`;

const greetings = [`Hi`, `Hello`, `Ciao`, `Arrivederci`];

function createButton() {
	//document.getElementById('root').innerHTML = meButton;

	const buttonNode = document.createElement("div");
	buttonNode.innerHTML = meButton
  document.getElementById("root").appendChild(buttonNode);
}

function addEventListener1(){
	document.getElementById('me').addEventListener('click', function(){
	console.log('meButtonElement was clicked!');
	});
}


////////////////////////////////////////////////////////////////


function createButton2() {

	let meCounter = 2;
	greetings.forEach(element => {
		const meButton2 = `<button id="me${meCounter}">${element}</button>`;

		const buttonNode = document.createElement("div");
		buttonNode.innerHTML = meButton2;
		document.getElementById("root").appendChild(buttonNode);
		meCounter++;
	});
}

function addEventListener2(){
	for (let i = 2; i <= greetings.length + 1; i++) {
		document.getElementById(`me${i}`).addEventListener('click', function() {
			console.log(`me${i}ButtonElement was clicked!`);
		});	
	}
}

/* function addEventListener3(){
	const meButtonElement = document.getElementById('me3');

	meButtonElement.addEventListener('click', function(){
	console.log('me3ButtonElement was clicked3!');
	});
}

function addEventListener4(){
	const meButtonElement = document.querySelector('#me4');

	meButtonElement.addEventListener('click', function(){
	console.log('me4ButtonElement was clicked4!');
	});
} */

////////////////////////////////////////////////////////////////

function createGreetingButtons() {

	let meCounter = 2;

	greetings.forEach(element => {
		const meButtonNew = `<button class="greetingButton">${element}!!!</button>`;
		const buttonNode = document.createElement("div");
		buttonNode.innerHTML = meButtonNew
		document.getElementById("root").appendChild(buttonNode);
		meCounter++;
	});
}

function addEventListenerByClass(){
	const greetingButtons = document.getElementsByClassName('greetingButton');

	for (const greetingButton of greetingButtons) {
  	const greeting = greetingButton.innerText;
  	greetingButton.addEventListener('click', function (){
    	console.log(`${greeting} and have a nice day!`);
 		});
	}
}

////////////////////////////////////////////////////////////////

const myButton = `<button id='me6'>Where am I!</button>`;

function createNewButton() {

	//document.getElementById('root').innerHTML = meButton;

	const buttonNode = document.createElement("div");
	buttonNode.innerHTML = myButton
  document.getElementById("root").appendChild(buttonNode);
}

function addEventListener6(){
	const myButtonElement = document.getElementById('me6');

	myButtonElement.addEventListener('click', function(event){
	console.log('myButton was clicked!');
	console.log(event);
	});
}

function showAnchestors(){
	const myButtonElement = document.getElementById('me6');

	myButtonElement.addEventListener('click', function (event) {
  	console.log(event.composedPath());
	});
}

////////////////////////////////////////////////////////////////

function addEventListenerToShowAllTheButtons(){
	const allTheButtonElements = document.querySelectorAll("button");

	allTheButtonElements.forEach(function (item) {
  	item.addEventListener('click', function (event) {
    	console.log(event.target.innerText);
			console.log(event.target.innerHTML);
			console.log(event.target.textContent);
  	});
	});
}

////////////////////////////////////////////////////////////////

const myInput = `<input id='input'></input>`;

function createInput() {
	const inputNode = document.createElement("div");
	inputNode.innerHTML = myInput
  document.getElementById("root").appendChild(inputNode);
}


function addInputEventListener(){
	const inputChar = document.querySelector("input");
	document.getElementById('input').addEventListener('input', function(){
		console.log(inputChar.value);
	});
}

////////////////////////////////////////////////////////////////

function addInputEventListener2(){
	const inputChar = document.getElementById('input');

	inputChar.addEventListener('input', function (event){
  	const inputContents = event.target.value;
  	console.log(`The input field's content is: ${inputContents}`);
	});
}
