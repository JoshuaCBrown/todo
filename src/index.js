import { showForm } from './showform.js';
import { getFormData } from './getformdata.js';
import { newTask } from './createtasks.js';
import { showTask } from './showtasks.js';
import { editTask } from './edittasks.js';


function submitForm(event) {
    event.preventDefault();
    const formData = getFormData();
    showForm();
    const taskObj = organizeFormData(formData);
    taskArray.push(taskObj);
    showTask(taskObj, taskArray);
};

function organizeFormData(myArr) {
    const taskTitle = myArr[0];
    const taskDescription = myArr[1];
    const taskPriority = myArr[2];
    const taskDate = myArr[3];
    const taskTime = myArr[4];
    const myTask = newTask(taskTitle, taskDescription, taskPriority, taskDate, taskTime);
    return myTask;
};

function btnSelector(myBtn, myIndex) {
    if (myBtn = 'edit') {
        editTask(myIndex);
    };
    if (myBtn = 'complete') {
        completeTask(myIndex);
    };
    if (myBtn = 'delete') {
        deleteTask(myIndex);
    }
};

let taskArray = [];
let taskCount = 0;

const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('click', showForm);
const submitBtn = document.querySelector('#fform');
submitBtn.addEventListener('submit', submitForm);

const myList = document.querySelector('.todo-list');
myList.addEventListener('click', (e) => {
    // const allArrows = Array.from(document.querySelector('.arrow-img'));
    // arrowBtns = array.from(allArrows);
    const btnClicked = e.target.className;
    const taskNum = e.target.id;
    btnSelector(btnClicked, taskNum);
});

