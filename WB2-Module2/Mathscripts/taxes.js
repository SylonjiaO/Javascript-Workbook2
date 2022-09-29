var hoursWorkedPerWeek = Math.random() * (60 - 40) + 40;
var hourlyPay = Math.floor(Math.random() * (60 - 25 + 25))+ 25;
var salaryWeekly = hourlyPay * hoursWorkedPerWeek;
var salaryYearly = salaryWeekly * 52.1429;
var salaryMonthly = salaryYearly/12;

var withholdings = salaryYearly * .23;

var withholdings2 = salaryMonthly *.23;


var netIncome = salaryMonthly * .77;
var payCheque = salaryWeekly * .77;

console.log("Withholdings at 23%: " + withholdings.toFixed(2) + "Per Year " + withholdings2.toFixed(2) + "Per Month ");
