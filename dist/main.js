/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createtasks.js":
/*!****************************!*\
  !*** ./src/createtasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTask: () => (/* binding */ newTask)\n/* harmony export */ });\nconst newTask = (title, description, priority, date, time) => {\n    return { title, description, priority, date, time };\n};\n\n//# sourceURL=webpack://todo/./src/createtasks.js?");

/***/ }),

/***/ "./src/getformdata.js":
/*!****************************!*\
  !*** ./src/getformdata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFormData: () => (/* binding */ getFormData)\n/* harmony export */ });\nconst getFormData = function() {\n    let formDataArr = [];\n    const uTitle = document.querySelector('#ftitle').value;\n    const uDescript = document.querySelector('#fdescript').value;\n    const uPriority = document.querySelector('#fpriority').value;\n    const uDeadLineDate = document.querySelector('#fdeadlinedate').value;\n    const uDeadLineTime = document.querySelector('#fdeadlinetime').value;\n    formDataArr = [\n        uTitle,\n        uDescript,\n        uPriority,\n        uDeadLineDate,\n        uDeadLineTime,\n    ];\n    return formDataArr;\n};\n\n//# sourceURL=webpack://todo/./src/getformdata.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showform.js */ \"./src/showform.js\");\n/* harmony import */ var _getformdata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getformdata.js */ \"./src/getformdata.js\");\n/* harmony import */ var _createtasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createtasks.js */ \"./src/createtasks.js\");\n/* harmony import */ var _showtasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showtasks.js */ \"./src/showtasks.js\");\n\n\n\n\n\n\nfunction submitForm(event) {\n    event.preventDefault();\n    const formData = (0,_getformdata_js__WEBPACK_IMPORTED_MODULE_1__.getFormData)();\n    (0,_showform_js__WEBPACK_IMPORTED_MODULE_0__.showForm)();\n    const taskObj = organizeFormData(formData);\n    taskArray.push(taskObj);\n    (0,_showtasks_js__WEBPACK_IMPORTED_MODULE_3__.showTask)(taskObj);\n};\n\nfunction organizeFormData(myArr) {\n    const taskTitle = myArr[0];\n    const taskDescription = myArr[1];\n    const taskPriority = myArr[2];\n    const taskDate = myArr[3];\n    const taskTime = myArr[4];\n    const myTask = (0,_createtasks_js__WEBPACK_IMPORTED_MODULE_2__.newTask)(taskTitle, taskDescription, taskPriority, taskDate, taskTime);\n    return myTask;\n};\n\nlet taskArray = [];\nlet taskCount = 0;\n\nconst addTaskBtn = document.querySelector('.add-task');\naddTaskBtn.addEventListener('click', _showform_js__WEBPACK_IMPORTED_MODULE_0__.showForm);\nconst submitBtn = document.querySelector('#fform');\nsubmitBtn.addEventListener('submit', submitForm);\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/showform.js":
/*!*************************!*\
  !*** ./src/showform.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showForm: () => (/* binding */ showForm)\n/* harmony export */ });\nconst showForm = function() {\n    const myFormDiv = document.querySelector('.add-child');\n    if (myFormDiv.classList.contains('show-this')) {\n        myFormDiv.classList.remove('show-this');\n    } else {myFormDiv.classList.add('show-this')};\n};\n\n//# sourceURL=webpack://todo/./src/showform.js?");

/***/ }),

/***/ "./src/showtasks.js":
/*!**************************!*\
  !*** ./src/showtasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showTask: () => (/* binding */ showTask)\n/* harmony export */ });\nconst showTask = (task) => {\n    const toDoList = document.querySelector('.todo-list');\n\n    const taskDiv = document.createElement('div');\n    taskDiv.className = 'task-div';\n    \n    const tTitleDiv = document.createElement('div');\n    const tDescriptionDiv = document.createElement('div');\n    const tPriorityDiv = document.createElement('div');\n    const tDateDiv = document.createElement('div');\n    const tTimeDiv = document.createElement('div');\n\n    const tTitle = document.createElement('h5');\n    const tDescription = document.createElement('h5');\n    const tPriority = document.createElement('h5');\n    const tDate = document.createElement('h5');\n    const tTime = document.createElement('h5');\n\n    tTitle.textContent = task.title;\n    tDescription.textContent = task.description;\n    tPriority.textContent = task.priority;\n    tDate.textContent = task.date;\n    tTime.textContent = task.time;\n\n    tTitleDiv.appendChild(tTitle);\n    tDescriptionDiv.appendChild(tDescription);\n    tPriorityDiv.appendChild(tPriority);\n    tDateDiv.appendChild(tDate);\n    tTimeDiv.appendChild(tTime);\n\n    taskDiv.appendChild(tTitleDiv);\n    taskDiv.appendChild(tDescriptionDiv);\n    taskDiv.appendChild(tPriorityDiv);\n    taskDiv.appendChild(tDateDiv);\n    taskDiv.appendChild(tTimeDiv);\n\n    toDoList.appendChild(taskDiv);\n}\n\n//# sourceURL=webpack://todo/./src/showtasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;