export const showTask = (task, taskList) => {
    const toDoList = document.querySelector('.todo-list');
    const currentTasks = document.querySelectorAll('.task-div');
    console.log(currentTasks);
    for (let i = 0; i < currentTasks.length; ++i) {
        toDoList.removeChild(currentTasks[i]);
    };
    for (let i = 0; i < taskList.length; ++i) {
    //creates visible task from object and adds it to .todo-list div
        

        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-div';
        
        const leftTaskDiv = document.createElement('div');
        leftTaskDiv.className = 'left-task-div';
        const rightTaskDiv = document.createElement('div');
        rightTaskDiv.className = 'right-task-div';

        const tPriorityDiv = document.createElement('div');
        const tTitleDiv = document.createElement('div');
        // const tDescriptionDiv = document.createElement('div');
        const tDateDiv = document.createElement('div');
        const tTimeDiv = document.createElement('div');

        const tTitle = document.createElement('h5');
        // const tDescription = document.createElement('h5');
        const tDate = document.createElement('h5');
        const tTime = document.createElement('h5');

        tTitle.textContent = taskList[i].title;
        // tDescription.textContent = task.description;
        tDate.textContent = taskList[i].date;
        tTime.textContent = taskList[i].time;

    // add class-name for color based on priority value of task
        switch (taskList[i].priority) {
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
        tPriorityDiv.classList.add('pr-rect');

        const arrowBtn = document.createElement('button');
        arrowBtn.className = 'arrow-btn';
        const arrowImg = document.createElement('img');
        arrowImg.src = './imgs/arrow.png';
        arrowImg.className = 'arrow-img';
        arrowImg.id = i;

    


        tTitleDiv.appendChild(tTitle);
        // tDescriptionDiv.appendChild(tDescription);
        tDateDiv.appendChild(tDate);
        tTimeDiv.appendChild(tTime);
        

        leftTaskDiv.appendChild(tPriorityDiv);
        leftTaskDiv.appendChild(tTitleDiv);

        rightTaskDiv.appendChild(tDateDiv);
        rightTaskDiv.appendChild(tTimeDiv);
        arrowBtn.appendChild(arrowImg);
        rightTaskDiv.appendChild(arrowBtn);
        

        taskDiv.appendChild(leftTaskDiv);
        taskDiv.appendChild(rightTaskDiv);
        // taskDiv.appendChild(tDescriptionDiv);

        toDoList.appendChild(taskDiv);
    }
};