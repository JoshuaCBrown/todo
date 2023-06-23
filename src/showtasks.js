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
    const tPriority = document.createElement('h5');
    const tDate = document.createElement('h5');
    const tTime = document.createElement('h5');

    tTitle.textContent = task.title;
    tDescription.textContent = task.description;
    tPriority.textContent = task.priority;
    tDate.textContent = task.date;
    tTime.textContent = task.time;

    tTitleDiv.appendChild(tTitle);
    tDescriptionDiv.appendChild(tDescription);
    tPriorityDiv.appendChild(tPriority);
    tDateDiv.appendChild(tDate);
    tTimeDiv.appendChild(tTime);

    taskDiv.appendChild(tTitleDiv);
    taskDiv.appendChild(tDescriptionDiv);
    taskDiv.appendChild(tPriorityDiv);
    taskDiv.appendChild(tDateDiv);
    taskDiv.appendChild(tTimeDiv);

    toDoList.appendChild(taskDiv);
}