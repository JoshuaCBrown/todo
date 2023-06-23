import { showForm } from './showform.js'
import { getFormData } from './getformdata.js'


const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('click', showForm);
const submitBtn = document.querySelector('#fsubmit');
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = getFormData();
    console.log(formData);
    // showForm();

})