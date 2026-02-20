// let plusBtn = document.getElementById('plus-btn');
// let minusBtn = document.getElementById('minus-btn');
// let value = document.getElementById('value');
// let initialVariable = 0;


// plusBtn.addEventListener('click', () => {
//     console.log("Plus Button Clicked");
//     initialVariable++;
//     value.innerHTML = initialVariable;
// });

// minusBtn.addEventListener('click', () => {
//     console.log("Minus Button Clicked");
//     initialVariable--;
//     value.innerHTML = initialVariable;
// });


let todo = [];
let todoList = document.getElementById('todo-list');
let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let todoCount = document.getElementById('todo-count');

todoCount.innerHTML = `0 items left`;

const updateTodoCount = () => {
    todoCount.innerHTML = `${todo.length} items left`;
}

addBtn.addEventListener('click', () => {
    console.log("Add Button Clicked");
    todo.push(todoInput.value);
    todoList.innerHTML = todo.map((item, index) => `<li class="todo-item">
            <label class="todo-label">
              <input type="checkbox" class="todo-check" />
              <span class="todo-text">${item} </span>
            </label>
            <button type="button" class="delete" aria-label onclick="deleteTodo(${index})"="Delete">✕</button>
          </li>`).join('');

    updateTodoCount();
});

const deleteTodo = (index) => {
    console.log("Delete Button Clicked");
    todo.splice(index, 1);
    todoList.innerHTML = todo.map(item => `<li class="todo-item">
            <label class="todo-label">
              <input type="checkbox" class="todo-check" />
              <span class="todo-text">${item} </span>
            </label>
            <button type="button" class="delete" aria-label="Delete">✕</button>
          </li>`).join('');
    updateTodoCount();
}