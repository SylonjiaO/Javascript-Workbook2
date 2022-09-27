var currentSavings = Math.random(); 
// calculations
var ir= Math.random() * (5 - 0) + 0;
var t = 72/ir;

var savings = currentSavings * 2;



//output
console.log("At a " + ir.toFixed(1) + "% interest rate, your savings account of $" + currentSavings.toFixed(2) + " will be worth $" + savings.toFixed(2) + " in " + t.toFixed(1) + " years");