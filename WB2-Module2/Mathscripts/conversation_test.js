// Description: This script tests various numeric
// conversion techniques
// Author: Sylonjia O. Newprogrammer
//parseInt 
var a = parseInt (" 101.1 ");
var b = parseInt("55");
var c = parseInt("402 Stevens");
var d = parseInt("Number 5 ");

console.log( a, b, c, d );
//parseFloat

var a = parseFloat(" 101.1 ");
var b = parseFloat("55");
var c = parseFloat("402 Stevens");
var d = parseFloat("Number 5 ");

console.log( a, b, c, d );
//number
var a = Number(" 101.1 ");
var b = Number("55");
var c = Number("402 Stevens");
var d = Number( "Number 5 ");

console.log( a, b, c, d );
//unary
var a = " 101.1 ";
 a = +a;
var b = "55";
 b = +b;
var c = "402 Stevens";
 c = +c;
var d = "Number 5 ";
 d = +d;

console.log( a, b, c, d );