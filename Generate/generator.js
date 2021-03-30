alert("Let's play a game!");

const inputLow = prompt("Gimme a random low number!");
const convertLow = parseInt(inputLow);

const inputHigh = prompt("Gimme a random high number");
const convertHigh = +inputHigh;

if (convertHigh && convertLow) {
    const result = Math.floor(Math.random() * (convertHigh - convertLow + 1)) + convertLow;
    document.querySelector('main').innerHTML = `<h1><bold>${result}</bold> is a random number between ${convertLow} and <bold>${convertHigh}</bold>!</h1>`;
} else {
    alert( "Please provide a number of numerical value." );
}

