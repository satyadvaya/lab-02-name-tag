console.log('hello world');

// Morning lab work ...
// name.style.color = 'blue';
// name.textContent = 'Alan';


// grabbing div that holds name, the text input , and the button.

const myButton = document.getElementById('button');

const name = document.getElementById('name');

const myInput = document.getElementById('input');

// taking current state of input on line 14, and setting it equal to text content.

function changeName() {

    const theCurrentStateOfTheInput = myInput.value;
    
    name.textContent = theCurrentStateOfTheInput;     
}

// attaching event listener that calls changeName function when clicked.

myButton.addEventListener('click', changeName);