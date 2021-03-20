let c = document.getElementById('c');
let display = document.getElementById('display');
let equals = document.getElementById('equals');

let btnsNum = document.getElementsByClassName('number');
let btnsOper = document.getElementsByClassName('operator');

let first;
let operator;

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

for (let i = 0; i < btnsNum.length; i++) {
	btnsNum[i].addEventListener('click', () => {
    if(display.textContent == '0') {
			display.textContent = '';
		}
		display.textContent += btnsNum[i].textContent;
	})
}

for (let i = 0; i < btnsOper.length; i++) {
	btnsOper[i].addEventListener('click', () => {
		first = display.textContent;
		display.textContent = '0';
		operator = btnsOper[i].textContent;
		
		
	})
}


c.addEventListener('click', () => {
	display.textContent = '0';
})



equals.addEventListener('click', () => {
  let second = display.textContent;
	let result;
	switch(operator) {
		case '+': result = add(Number(first), Number(second));
		break;
		case '-': result = subtract(Number(first), Number(second));
		break;
		case '*': result = multiply(Number(first), Number(second));
		break;
		case '/': result = divide(Number(first), Number(second));
	}
	display.textContent = result;
	document.body.style.pointerEvents = 'none'
})
