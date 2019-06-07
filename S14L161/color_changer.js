var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function(){
  if (document.body.background.color = "white") {
  document.body.style.background = "purple";
  }
  else {
    document.body.style.background = "white";
  }
})


// if (document.body.background.color = "white") {
//   button.addEventListener("click", function(){
//     document.body.style.background = "purple";
//   })
// }
// document.body.style.background.toggle();

// else if (document.body.background.color != "white") {
//   button.addEventListener("click", function(){
//     document.body.style.background = "white";
//   })
// }
