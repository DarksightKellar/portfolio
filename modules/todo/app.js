// Todo App - In-memory storage
const todos = [
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Deploy to production', completed: false },
];

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function render() {
    list.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="checkbox ${todo.completed ? 'completed' : ''}" onclick="toggle(${todo.id})">
                ${todo.completed ? '✓' : ''}
            </div>
            <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button class="delete-btn" onclick="remove(${todo.id})">✕</button>
        `;
        list.appendChild(li);
    });
}

function add(text) {
    todos.push({ id: Date.now(), text, completed: false });
    render();
}

function toggle(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        render();
    }
}

function remove(id) {
    const index = todos.findIndex(t => t.id === id);
    if (index > -1) {
        todos.splice(index, 1);
        render();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        add(input.value.trim());
        input.value = '';
    }
});

// Initial render
render();
