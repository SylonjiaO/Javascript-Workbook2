var hoursWorkedPerWeek = Math.random() * (60 - 40) + 40;
var hourlyPay = Math.floor(Math.random() * (60 - 25 + 25))+ 25;
var salaryWeekly = hourlyPay * hoursWorkedPerWeek;
var salaryYearly = salaryWeekly * 52.1429;
var salaryMonthly = salaryYearly/12;

var withholdings = salaryYearly * .23;
var netIncome = salaryMonthly * .77;
var payCheque = salaryWeekly * .77;

console.log("Yearly Withholdings at 23%: " + withholdings.toFixed(2) + " Weekly Paycheck: " + payCheque.toFixed(2) +
 " Net Monthly Income: " + netIncome.toFixed(2) + " Average Weekly Hours: " + hoursWorkedPerWeek.toFixed(2) + 
 " Gross Yearly: " + salaryYearly.toFixed(2) + " Average Hourly: " + hourlyPay.toFixed(2));
