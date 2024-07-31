document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date').value;
    const taskTime = document.getElementById('task-time').value;

    if (taskInput.value.trim() === '') return;

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    const currentDateTime = new Date();
    const addedDateTime = `${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}`;
    const dueDateTime = `${taskDate} ${taskTime}`;

    li.innerHTML = `
        <span>${taskInput.value}</span>
        <span class="due-date">Due: ${dueDateTime}</span>
        <span class="timestamp">Added: ${addedDateTime}</span>
        <button onclick="completeTask(this)">Mark as Completed</button>
    `;
    taskList.appendChild(li);

    taskInput.value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-time').value = '';
});

function completeTask(button) {
    const li = button.parentElement;
    const completedList = document.getElementById('completed-list');
    const completedDateTime = new Date().toLocaleString();
    
    li.querySelector('button').remove(); 
    li.classList.add('completed');
    li.innerHTML += `<span class="completed-time">Completed: ${completedDateTime}</span>`;
    completedList.appendChild(li);
}
