"use strict";


function calculatePay(){
// query element
    const hoursWorkedInput = document.getElementById("hoursWorkedInput");
const payRateInput = document.getElementById("payRateInput");
const resultPara = document.getElementById("resultPara");

//calculate something
let hoursWorked = Number( hoursWorkedInput.value);
let payRate = Number( payRateInput.value);
let pay = hoursWorked * payRate;

//create your message to display
let message = `pay is : ${ pay }`
//display your message
resultPara.innerText = message;
}

calculatePay();

