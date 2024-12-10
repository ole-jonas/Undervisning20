// Fetching the elements from HTML
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Load the to-do list from LocalStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTodos);

function loadTodos() {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    
    if (storedTodos) {
        storedTodos.forEach(todo => {
            createTodoItem(todo.text, todo.finished);
        });
    }
}

// Registers when button is clicked and activates a function.
addButton.addEventListener("click", function () {
    console.log("Legg til knappen er trykket!");

    // Get the value from the input field
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    // If the input is empty, do nothing
    if (!inputFieldValue.trim()) return;

    // Create the todo item and add it to the list
    createTodoItem(inputFieldValue, false);

    // Save the updated todo list to localStorage
    saveTodos();
});

function createTodoItem(text, isFinished) {
    const todoItem = document.createElement("li");
    todoItem.textContent = text;

    if (isFinished) {
        todoItem.classList.add("finished");
    }

    // Creating the "Finished" button
    const finishedButton = document.createElement("button");
    finishedButton.textContent = "Ferdig";
    todoItem.appendChild(finishedButton);

    // Adding event listener for the "Finished" button
    finishedButton.addEventListener("click", function () {
        console.log("Ferdig knappen er trykket!");

        todoItem.classList.toggle("finished");

        // Save the updated todo list to localStorage
        saveTodos();
    });

    // Creating the "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Slett";
    todoItem.appendChild(deleteButton);

    // Adding event listener for the "Delete" button
    deleteButton.addEventListener("click", function () {
        console.log("Slett knappen er trykket!");

        // Only remove the item if it is finished
        if (todoItem.classList.contains("finished")) {
            todoItem.remove(); // Remove the todo item from the list
            saveTodos();
        } else {
            console.log("The item is not finished yet and cannot be deleted.");
        }
    });

    todoList.appendChild(todoItem);
}

function saveTodos() {
    const todos = [];
    const todoItems = todoList.querySelectorAll("li");

    todoItems.forEach(todoItem => {
        todos.push({
            text: todoItem.firstChild.textContent.trim(), // Only the text part of the li
            finished: todoItem.classList.contains("finished")
        });
    });

    // Save the todos array to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
}
