// List of tasks to display in checklist.
const tasksGeneral = [
    'Correct Profile? 60FPS vs 30FPS?',
    'Twitch Title & Category',
    'Webcam & Lighting'
];

// Handles marking an item in the list as complete.
const handleCheckbox = (event) => {
    const parent = event.target.parentNode.parentNode;
    const task = event.target.parentNode.firstChild.nextSibling;

    parent.classList.toggle('bg-warning');
    parent.classList.toggle('bg-success');
    task.classList.toggle('complete');
}

// Adds all of the tasks to the checklist.
const populateTasks = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const checklistTitle = document.getElementById('checklist-title');
    const tasksContainer = document.getElementById('tasks');

    let taskList = tasksGeneral;
    checklistTitle.innerText = `General (${day}/${month + 1}/${year})`;

    taskList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        const taskItem = document.createElement('div');
        const taskCheckbox = document.createElement('input');
        const taskLabel = document.createElement('label');
        const taskLabelText = document.createTextNode(task);

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskLabel.appendChild(taskLabelText);
        taskElement.appendChild(taskItem);
        tasksContainer.appendChild(taskElement);

        taskElement.classList.add('list-group-item', 'bg-warning');
        taskItem.classList.add('custom-control', 'custom-checkbox');
        taskCheckbox.setAttribute("type", "checkbox");
        taskCheckbox.setAttribute("id", `task-${index}`)
        taskCheckbox.setAttribute("onclick", "handleCheckbox(event)");
        taskCheckbox.classList.add('custom-control-input');
        taskLabel.setAttribute("for", `task-${index}`);
        taskLabel.classList.add('custom-control-label');
    });
}

// Create the checklist once upon page load.
populateTasks();