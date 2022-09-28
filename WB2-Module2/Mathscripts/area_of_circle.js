
// calculations
var r = 7**10
var c = Math.floor(Math.random() * (r - 1+1)) + 1;
var radius = c/2*Math.PI;
var circleArea = Math.PI * radius**2;

//output
console.log("If c is " + c + " The area of the circle is " + circleArea + " if maximum is " + r);