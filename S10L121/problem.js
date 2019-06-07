// isEven: returns true for even integers, false for odds

function isEven(x) {
  if(x % 2 === 0){
    return true;
  }
  else {
    return false;
  }
};

// factorial: factors a given integer, but 0! = 1

function factorial(x) {
  if (x === 0 || x === 1) {
    return "1";
  }
  else {
    return x * factorial(x-=1);
  }
}

// kebabToSnake: turns the - in a string into _

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_")
  return newStr;
}
