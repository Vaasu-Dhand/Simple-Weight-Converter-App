//Variable for referncing to HTML input classes
const input = document.querySelector('.box');
const grams = document.querySelector('.grams-value');
const kiloGrams = document.querySelector('.kilograms-value');
const ounces = document.querySelector('.ounces-value');

//document.querySelector('.units').style.visibility = 'hidden'; //Hides the content
//document.querySelector('.units').style.visibility = 'visible';    //Makes the content visible

input.addEventListener('input', function() {
    console.log(input.value);
    valueToUnits();
});

grams.addEventListener('input', function() {
    console.log(input.value);
    gramsToUnits();
});

kiloGrams.addEventListener('input', function() {
    console.log(input.value);
    kiloGramsToUnits();
});

ounces.addEventListener('input', function() {
    console.log(input.value);
    ouncesToUnits();
});

function valueToUnits() {
    let gramsValue = Math.floor((input.value * 453.514) * 100) / 100;
    grams.value = gramsValue;
    let kiloGramsValue = Math.floor((input.value / 2.205) * 100) / 100;
    kiloGrams.value = kiloGramsValue;
    let ouncesValue = input.value * 16;
    ounces.value = ouncesValue;
}

function gramsToUnits() {
    let inputValue = Math.floor((grams.value / 453.514) * 100) / 100;
    input.value = inputValue;
    let kiloGramsValue = Math.floor((grams.value / 1000) * 100) / 100;
    kiloGrams.value = kiloGramsValue;
    let ouncesValue = Math.floor((grams.value / 28.35) * 100) / 100;
    ounces.value = ouncesValue;
}   

function kiloGramsToUnits() {
    let inputValue = Math.floor((kiloGrams.value * 2.205) * 100) / 100;
    input.value = inputValue;
    let gramsValue = Math.floor((kiloGrams.value * 1000) * 100) / 100;
    grams.value = gramsValue;
    let ouncesValue = Math.floor((kiloGrams.value * 35.274) * 100) / 100;
    ounces.value = ouncesValue;
}

function ouncesToUnits() {
    let inputValue = Math.floor((ounces.value / 16) * 100) / 100;
    input.value = inputValue;
    let gramsValue = Math.floor((ounces.value * 28.35) * 100) / 100;
    grams.value = gramsValue;
    let kiloGramsValue = Math.floor((ounces.value / 35.274) * 100) / 100;
    kiloGrams.value = kiloGramsValue;
}

// Find out What is the difference between writing the function this way and above.
    // input.addEventListener('input', valueChange());
    // function valueChange() {
    //     console.log(input.value);
    // }