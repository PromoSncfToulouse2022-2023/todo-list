// This is the array that will hold the todo list items
let todoItems = [];


function addTodo(text)
{
    // This function will create a new todo object based on the
    // text that was entered in the text input, and push it into
    // the `todoItems` array

}

function renderTodo(todo)
{
    // Select the first element with a class of `js-todo-list`

    // Create an `li` element and assign it to the`ul`

    // Set the contents of the `li` element created above

    // Append the element to the DOM as the last child of
    // the element referenced by the `list` variable

}

function toggleDone(key)
{
    // Locate the todo item in the todoItems array and set its checked
    // property to the opposite. That means, `true` will become `false` and vice
    // versa.

}

// Select the form element
const form = document.getElementById("todo-form");

// Add a submit event listener
form.addEventListener('submit', event =>
{
    // prevent page refresh on form submission
    event.preventDefault();

    console.log(event);

    // select the text input

    // Get the value of the input

    // send the value to the addTodo function

});