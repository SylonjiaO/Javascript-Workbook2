
// calculations
var maximum = 7**10
var circum = Math.floor(Math.random() * (maximum - 1+1)) + 1;
var radius = circum/2*Math.PI;
var circleArea = Math.PI * radius**2;

//output
console.log("If circumference is " + circum + " The area of the circle is " + circleArea + " if maximum is " + maximum);