import { showForm } from './showform.js';
import { getFormData } from './getformdata.js';
import { createTask } from './createtasks.js';

function submitForm(event) {
    const formData = getFormData();
    console.log(formData);
    clearForm();
    showForm();
    createTask(formData);
    event.preventDefault();
};

const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('click', showForm);
const submitBtn = document.querySelector('#fform');
submitBtn.addEventListener('submit', submitForm);

