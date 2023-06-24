export const getFormData = function() {
    let formDataArr = [];
    const uTitle = document.querySelector('#ftitle').value;
    const uDescript = document.querySelector('#fdescript').value;
    const uPriority = document.querySelector('input[name="fpriority"]:checked').value
    const uDeadLineDate = document.querySelector('#fdeadlinedate').value;
    const uDeadLineTime = document.querySelector('#fdeadlinetime').value;
    formDataArr = [
        uTitle,
        uDescript,
        uPriority,
        uDeadLineDate,
        uDeadLineTime,
    ];
    return formDataArr;
};