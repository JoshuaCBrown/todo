export const showForm = function() {
    const myFormDiv = document.querySelector('.add-child');
    if (myFormDiv.classList.contains('show-this')) {
        myFormDiv.classList.remove('show-this');
    } else {myFormDiv.classList.add('show-this')};
};