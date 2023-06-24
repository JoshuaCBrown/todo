export const editTask = (myIndex) => {
    const allTheArrows = document.querySelectorAll('.arrow-img');
    const myArrow = allTheArrows[myIndex];
    const allTheTasks = document.querySelectorAll('.edit-task-div');
    console.log(allTheTasks);
    const myTask = allTheTasks[myIndex];

    if (myArrow.classList.contains('rotated-arrow')) {
        myArrow.classList.remove('rotated-arrow');
        myTask.classList.remove('show-edit-div');
    } else {
        console.log(myArrow.classList);
        console.log(myTask.classList);
        myArrow.classList.add('rotated-arrow');
        myTask.classList.add('show-edit-div');
    };




    // const editBox = document.createElement('div');
    // editBox.className = 'edit-box';
};