const { interfaces } = require("mocha");

function add(a,b){
    return (a+b);
}
add(1000, 1000);

function subtract(a,b){
    return (a-b);
}
subtract(1000, 1000);

function multiply(a,b){
    return (a*b);
}
multiply(1000, 1000);

function divide(a,b){
    return (a/b);
}
divide(1000, 1000);
 
function increment(a){
      return a+1;
}

function decrement(a){
    return a-1;
}

function makeInt(n){
    return parseInt(n,10);
}
 function preserveDecimal(n){
     return parseFloat(n);
 }

