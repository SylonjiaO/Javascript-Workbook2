var currentSavings = Math.random(); 
var x= Math.floor( Math.random() * (100 - 10+10)) + 10;
// calculations
var ir= Math.random() * (5 - 2) + 0;
var t = 72/ir;

//var savings = currentSavings( 1 + (ir/x))**x*t;//
var savings = (currentSavings * Math.pow((1 + (ir / (x * 100))), (x * t)));



//output
console.log("At a " + ir.toFixed(1) + "% interest rate, your savings account of $" + currentSavings.toFixed(2) + " will be worth $" + savings.toFixed(2) + " in " + t.toFixed(1) + " years");