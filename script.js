// Fetching the elements from HTML
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Registers when button is clicked and activates a function.
addButton.addEventListener("click", function (){
    console.log("Legg til knappen er trykket!");

    // Creating a variable storing the value of another variable
    // Taking the global variable inputField and using the method .value to fetch a value stored in a new variable.
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    // Creates a new Element to the list with the content from input after button press.
    const todoItem = document.createElement("li");
    const inputFieldValue = inputField.value
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);

    // Creating the "Finished" button
    const finishedButton = document.createElement("button");
    finishedButton.textContent = "Ferdig";
    todoItem.appendChild(finishedButton);

    // Adding event listener for the "Finished" button
    finishedButton.addEventListener("click", function () {
        console.log("Ferdig knappen er trykket!");
        // Toggles the strikethrough effect on the todo item
        if (todoItem.style.textDecoration === "line-through") {
            todoItem.style.textDecoration = "none"; // Remove striketrough
        } else {
            todoItem.style.textDecoration = "line-through"; // Add strikethrough
        }
    });

    // Creating the "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Slett";
    todoItem.appendChild(deleteButton);

    // Adding event listener for the "Delete" button
    deleteButton.addEventListener("click", function () {
        console.log("Slett knappen er trykket!");

        // Only remove the item if it has a strikethrough (i.e., its finished)
        if (todoItem.style.textDecoration === "line-through") {
            todoItem.remove(); // Remove the todo item from the list
}  else {
    console.log("The item is not finished yet and cannot be deleted.");
}  
    });
});
  