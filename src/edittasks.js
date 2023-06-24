export const editTask = (anIndex) => {
    const allTheArrows = document.querySelectorAll('.arrow-img');
    const myArrow = allTheArrows[anIndex];
    myArrow.classList.add('rotated-arrow');
}