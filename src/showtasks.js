export const showTask = (task, taskList) => {
    const toDoList = document.querySelector('.todo-list');
    const currentTasks = document.querySelectorAll('.task-container');
    console.log(currentTasks);
    for (let i = 0; i < currentTasks.length; ++i) {
        toDoList.removeChild(currentTasks[i]);
    };
    for (let i = 0; i < taskList.length; ++i) {
    //creates visible task from object and adds it to .todo-list div
        
        const taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';
        
    //visible task div summary

        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-div';
        
        const leftTaskDiv = document.createElement('div');
        leftTaskDiv.className = 'left-task-div';
        const rightTaskDiv = document.createElement('div');
        rightTaskDiv.className = 'right-task-div';

        const tPriorityDiv = document.createElement('div');
        const tTitleDiv = document.createElement('div');
        const tDateDiv = document.createElement('div');
        const tTimeDiv = document.createElement('div');

        const tTitle = document.createElement('h5');
        const tDate = document.createElement('h5');
        const tTime = document.createElement('h5');

        tTitle.textContent = taskList[i].title;
    
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
        
//create editTaskDiv with class name to change visibility

        const editTaskDiv = document.createElement('div');
        editTaskDiv.className = 'edit-task-div';
        
        const editTaskTitle = document.createElement('div');
        editTaskTitle.className = 'edit-task-title';
        const editTaskDescription = document.createElement('div');
        editTaskDescription.className = 'edit-task-description';
        const editTaskPriority = document.createElement('div');
        editTaskPriority.className = 'edit-task-priority';
        const editTaskDeadline = document.createElement('div');
        editTaskDeadline.className = 'edit-task-deadline';
        
        editTaskTitle.textContent = taskList[i].title;
        editTaskDescription.textContent = taskList[i].description;
        
        editTaskDiv.appendChild(editTaskTitle);
        editTaskDiv.appendChild(editTaskDescription);
         

        // here I will get form elements and add them to edit box


        taskContainer.appendChild(taskDiv);
        taskContainer.appendChild(editTaskDiv);
        toDoList.appendChild(taskContainer);
    }
};