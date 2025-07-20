let todos = [];
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('b1');
const removeBtn = document.getElementById('b2');
const taskList = document.getElementById('task-list');

// Add task functionality
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Remove all tasks
removeBtn.addEventListener('click', () => {
    todos = [];
    renderTasks();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        todos.push(taskText);
        renderTasks();
        taskInput.value = '';
        taskInput.focus();
    }
}

function deleteTask(index) {
    todos.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    todos.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        taskElement.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Initial render
renderTasks();