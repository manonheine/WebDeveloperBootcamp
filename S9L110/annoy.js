// var answer = prompt("are we there yet?");
//
// while(answer !== "yes" && !== "yeah") {
//   var answer = prompt("are we ther yet?")
// }
//
// alert("Yay, we made it!")

/* if(answer === "yes") {
  alert("Yay, we made it!")
}
*/
// VERSION 2

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
  var answer = prompt("are we ther yet?")
}

alert("Yay, we made it!")
