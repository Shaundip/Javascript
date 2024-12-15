function printTodo() {
    var randomTasks = ["Buy groceries", "Do laundry",
        "Clean house", "Walk dog", "Cook dinner", "Wash car", "Mow lawn",
        "Take out trash", "Wash dishes", "Vacuum", "Dust", "Organize closet",
        "Organize garage", "Organize pantry", "Organize office", "Organize bedroom",
        "Organize bathroom", "Organize kitchen", "Organize living room", "Organize basement",
        "Organize attic"]
    randomTasks.forEach(task => {
        var list = document.getElementById("todoList");
        var li = document.createElement("li");
        li.innerHTML = task;
        list.appendChild(li);
    });
}
