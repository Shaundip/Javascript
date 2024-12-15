function addTodo(){
    var todo = document.getElementById("todoInput").value;
    var list = document.getElementById("todoList");
    var li = document.createElement("li");
    li.innerHTML = todo;
    list.appendChild(li);
    document.getElementById("todo").value = "";
}
