function addTask() {
    var taskInput = document.getElementById('todo-input');
    var taskList = document.getElementById('todo-list');

    if (taskInput.value === '') {
        alert('Please enter a task!');
        return;
    }

    var listItem = document.createElement('div');
    listItem.className = 'todo-list-item';

    var taskText = document.createElement('span');
    taskText.innerText = taskInput.value;

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = '';
}
