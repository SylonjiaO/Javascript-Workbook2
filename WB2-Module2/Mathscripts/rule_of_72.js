// ir: intrest rate x= contribution per year 
//var max = Math.random() *(5000 - 100)+ 100;
//var min = Math.random() *(100 - 1) + 1;// for continous contribution
var currentSavings = Math.random(); 
var contribution= Math.floor( Math.random() * (100 - 10 + 10)) + 10;
// calculations
var intrestRate= Math.random() * (5 - 2) + 2;
var term = 72/intrestRate;

//var savings = currentSavings( 1 + (ir/x))**x*t;//
var savings = (currentSavings * Math.pow((1 + (intrestRate / (contribution * 100))), (contribution * term)));



//output
console.log("At a " + intrestRate.toFixed(1) + "% interest rate, your savings account of $" + currentSavings.toFixed(2) + " will be worth $" + savings.toFixed(2) + " in " + term.toFixed(1) + " years");