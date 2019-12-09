var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {

    if(input === "list") {
        console.log(todos);
    }
    else if(input === "new") {
        var todo = prompt("Enter a new todo");
        todos.push(todo);
    }

    var input = prompt("What would you like to do?");

}

console.log("OK! you quit the app");