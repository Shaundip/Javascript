function addTodo() {
    var todo = document.getElementById("todoInput").value;
    var list = document.getElementById("todoList");
    var currentTodoLength = list.childNodes.length
    var li = document.createElement("li");
    var plusOne = currentTodoLength + 1;
    li.id = "todoItem" + plusOne;
    li.class = "todoItem" + currentTodoLength + 1;
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.id = "removeTodoAtIndex(" + plusOne + ")";
    removeBtn.onclick = function () {
        removeTodoAtIndex(li.id);
    }
    var detailSpan = document.createElement("span");
    detailSpan.innerHTML = new Date();
    li.innerHTML = todo;
    li.appendChild(removeBtn);
    li.appendChild(detailSpan);
    list.appendChild(li);
    document.getElementById("todo").value = "";
}

function removeTodo() {
    var list = document.getElementById("todoList");
    list.removeChild(list.lastChild);
}
function removeTodoAtIndex() {
    var list = document.getElementById("todoList");
    list.removeChild(list.lastChild);
}