const add = function(a,b) {
	return (a+b); 
};

const subtract = function(a,b) {
	return (a-b)
};

const sum = function(arr) {
  
	return arr.length ? arr.reduce((p,v) => p+v) : 0; 
};

const multiply = function(arr) {
return arr.reduce((p,v) => p*v); 
};

const power = function(base, exp) {
	return base**exp; 
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1; 
  return Array.from({length: num}, (_,i) => i+1).reduce((p,v)=>p*v); 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
