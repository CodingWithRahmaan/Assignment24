

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.innerHTML = `
                ${taskText}
                <button class="delete-btn">X</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function removeTask(e) {
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
});
