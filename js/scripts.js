var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(add(number1, number2));
var sub = function(number1, number2) {
  return number1 - number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(sub(number1, number2));
var multiply = function(number1, number2) {
  return number1 * number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(multiply(number1, number2));
var divide = function(number1, number2) {
  return number1 / number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(divide(number1, number2));

// BMI Calculator
var BMI=function(height,weight)
{
var x=((weight/(height*height))*703);
return x;
};
var getinfo=function()
{
var height=prompt("Enter your height in inches");

var weight =prompt("Enter your weight in pounds");
var Bodymass=BMI(height,weight);
return Bodymass;
};

var BM=getinfo();

alert("your BMI " + BM);

// celsius to farenheit
var fahrenheit=function(celsius)
{
var x=((celsius*1.8)+32);
return x;
};
var getinfo=function()
{
var celsius=prompt("Enter temp in celsius");
return celsius;
};
var celsius=getinfo();
var x=fahrenheit(celsius);
alert(celsius + " covernted to farenheit equals" + x + ".");
// gallons to liters
var convertGAtoL=function(gallons)
{
var lit=gallons*3.785412;
return lit;
};
var getinfo=function()
{
var x=prompt("Enter the Number you want to convert from gallon to Liter");
return x;
};
var  GA=getinfo();
var result=convertGAtoL(GA);
alert (GA + " gallons converted to Liters is " + result + " Liters");
