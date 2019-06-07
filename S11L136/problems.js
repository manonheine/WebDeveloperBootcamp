// printReverse, prints the array the other way around.

function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
  }
}

// isUniform, returns true if all characters in array are the same.

function isUniform(arr) {
  var start = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== start) {
      return false;
    }
  }
    return true;
}

//  sumArray, returns the sum of the array.

function sumArray(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    var total = total += arr[i];
  }
  console.log(total);
}

// maxNum returns the highest number in the array.

function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // arr.forEach(function(arr) {
  //   if ( arr > first) {
  //     var max = arr;
  //   }
  //   else {
  //     return max;
  //   }
  // });
return max;
}
