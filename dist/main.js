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

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navCreateBtn = document.querySelector(\"#nav_create_btn\");\r\nconst navClearBtn = document.querySelector(\"#nav_clear_btn\");\r\nconst overlay1 = document.querySelector(\".overlay1\");\r\nconst overlay1CancelBtn = document.querySelector(\"#overlay1_cancel_btn\");\r\nconst overlay1Input = document.querySelector(\"#overlay1_input\");\r\nconst mainContent = document.querySelector(\".main_content\");\r\n\r\nfunction createPage() {\r\n    navClearBtn.addEventListener(\"click\", function () {\r\n        overlay1.style.display = \"none\";\r\n        mainContent.textContent = \"\";\r\n        clearInput();\r\n    });\r\n\r\n    overlay1CancelBtn.addEventListener(\"click\", function () {\r\n        overlay1.style.display = \"none\";\r\n        clearInput();\r\n    });\r\n\r\n    navCreateBtn.addEventListener(\"click\", function () {\r\n        overlay1.style.display = \"block\";\r\n        clearInput();\r\n    });\r\n}\r\n\r\nfunction clearInput() {\r\n    overlay1Input.value = \"\";\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\n\n//# sourceURL=webpack://todo-list-self/./src/create.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst overlay1 = document.querySelector(\".overlay1\");\r\nconst overlay1CreateBtn = document.querySelector(\"#overlay1_create_btn\");\r\nconst overlay1Input = document.querySelector(\"#overlay1_input\");\r\nconst mainContent = document.querySelector(\".main_content\");\r\n\r\nconst overlay2 = document.querySelector(\".overlay2\");\r\nconst overlay2CancelBtn = document.querySelector(\"#overlay2_cancel_btn\");\r\nconst overlay2SaveBtn = document.querySelector(\"#overlay2_save_btn\");\r\nconst overlay2Input = document.querySelectorAll(\"input\").value;\r\n\r\n\r\nfunction addPage() {\r\n    overlay1CreateBtn.addEventListener(\"click\", function () {\r\n        overlay1.style.display = \"none\";\r\n\r\n        const pageContent = document.createElement(\"div\");\r\n        pageContent.setAttribute(\"class\", \"page_content\");\r\n\r\n        let taskTitel = document.createElement(\"h3\");\r\n        taskTitel.setAttribute(\"class\", \"task_tital\");\r\n        let overlay1InputValue = overlay1Input.value;\r\n        if (overlay1InputValue !== \"\") {\r\n            taskTitel.innerHTML = `${overlay1InputValue}`;\r\n        } else {\r\n            taskTitel.innerHTML = `Name?`;\r\n        }\r\n\r\n        let addDetailsBtn = document.createElement(\"button\");\r\n        addDetailsBtn.setAttribute(\"class\", \"add_details_btn\");\r\n        addDetailsBtn.innerText = \"Add Details\";\r\n\r\n        addDetailsBtn.addEventListener(\"click\", function () {\r\n            overlay2.style.display = \"block\";\r\n\r\n            overlay2CancelBtn.addEventListener(\"click\", function () {\r\n                overlay2.style.display = \"none\";\r\n            });\r\n\r\n            overlay2SaveBtn.addEventListener(\"click\", function () {\r\n                addDetailsBtn.remove();\r\n                overlay2.style.display = \"none\";\r\n\r\n                let overlay2DateInputValue = document.querySelector(\"#overlay2_dateInput\").value;\r\n                let overlay2DateInputText = document.createElement(\"p\");\r\n                overlay2DateInputText.innerHTML = `Dew Date: ${overlay2DateInputValue}`;\r\n                overlay2DateInputText.setAttribute(\"class\",\"overlay2DateInputText\");\r\n                pageContent.appendChild(overlay2DateInputText);\r\n                \r\n\r\n                let priorityInputValue = document.querySelector(\"#priorityInput\").value;\r\n                if (priorityInputValue === \"Low\") {\r\n                    pageContent.style.border = \"5px solid green\";\r\n                } else if (priorityInputValue === \"Midium\") {\r\n                    pageContent.style.border = \"5px solid yellow\";\r\n                } else {\r\n                    pageContent.style.border = \"5px solid red\";\r\n                }\r\n\r\n                let discriptionInputValue =document.querySelector(\"#discriptionInput\").value;\r\n                let discriptionInputText = document.createElement(\"p\");\r\n                discriptionInputText.innerHTML = `Discription: ${discriptionInputValue}`;\r\n                discriptionInputText.setAttribute(\"class\",\"discriptionInputText\");\r\n                pageContent.appendChild(discriptionInputText);\r\n                \r\n                \r\n            });\r\n        });\r\n\r\n        let deleteBtn = document.createElement(\"button\");\r\n        deleteBtn.setAttribute(\"class\", \"delete_btn\");\r\n        deleteBtn.innerText = \"Delete\";\r\n\r\n        deleteBtn.addEventListener(\"click\", function (event) {\r\n            const parentDiv = event.target.parentElement;\r\n            parentDiv.remove();\r\n        });\r\n\r\n        pageContent.appendChild(taskTitel);\r\n        pageContent.appendChild(addDetailsBtn);\r\n        pageContent.appendChild(deleteBtn);\r\n        mainContent.appendChild(pageContent);\r\n         \r\n    });\r\n}\r\n\r\n// function clearInput(input){\r\n//         if(input.type === text){\r\n//             input.value = '';\r\n//         }\r\n//         else if(input.type === Date){\r\n//             input.value = '';\r\n//         }\r\n// }\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPage);\r\n\r\n\n\n//# sourceURL=webpack://todo-list-self/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ \"./src/create.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://todo-list-self/./src/index.js?");

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