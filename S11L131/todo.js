// alert("Connected!");

var todos = ["Make lemon pie"];

var input = prompt("What would you like to do?");


while (input !== "quit") {
  if(input === "list") {
      console.log(todos);
  }
  else if (input === "new") {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
  }
  var input = prompt("What would you like to do?");
}
console.log("Ok you're done");
