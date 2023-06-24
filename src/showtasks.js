export const showTask = (task) => {
    const toDoList = document.querySelector('.todo-list');

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-div';
    
    const tTitleDiv = document.createElement('div');
    const tDescriptionDiv = document.createElement('div');
    const tPriorityDiv = document.createElement('div');
    const tDateDiv = document.createElement('div');
    const tTimeDiv = document.createElement('div');

    const tTitle = document.createElement('h5');
    const tDescription = document.createElement('h5');
    const tDate = document.createElement('h5');
    const tTime = document.createElement('h5');

    tTitle.textContent = task.title;
    tDescription.textContent = task.description;
    tDate.textContent = task.date;
    tTime.textContent = task.time;

// add class-name for color based on priority value of task
    switch (task.priority) {
        case 'fp-hi':
            tPriorityDiv.className = 'pr-red';
            break;
        case 'fp-med':
            tPriorityDiv.className = 'pr-yellow';
            break;
        case 'fp-low':
            tPriorityDiv.className = 'pr-green';
            break;
        default:
            break;
    };

    tTitleDiv.appendChild(tTitle);
    tDescriptionDiv.appendChild(tDescription);
    tDateDiv.appendChild(tDate);
    tTimeDiv.appendChild(tTime);

    taskDiv.appendChild(tPriorityDiv);
    taskDiv.appendChild(tTitleDiv);
    taskDiv.appendChild(tDescriptionDiv);
    taskDiv.appendChild(tDateDiv);
    taskDiv.appendChild(tTimeDiv);

    toDoList.appendChild(taskDiv);
}