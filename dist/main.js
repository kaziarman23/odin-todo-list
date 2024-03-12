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

/***/ "./src/createPage.js":
/*!***************************!*\
  !*** ./src/createPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navCreateBtn = document.querySelector(\".navCreateBtn\");\r\nconst navClearBtn = document.querySelector(\".navClearBtn\");\r\nconst formOne = document.querySelector(\".formOne\");\r\nconst formCancelBtn = document.querySelector(\".formCancelBtn\");\r\nconst nameInput = document.querySelector(\"#nameInput\");\r\nfunction createPage() {\r\n    navCreateBtn.addEventListener(\"click\", function () {\r\n        formOne.style.display = \"block\";\r\n        clearInput();\r\n    });\r\n    navClearBtn.addEventListener(\"click\", function () {\r\n        formOne.style.display = \"none\";\r\n        const mainContent = document.querySelector(\".mainContent\");\r\n        mainContent.textContent = \"\";\r\n        clearInput();\r\n    });\r\n    formCancelBtn.addEventListener(\"click\", function () {\r\n        formOne.style.display = \"none\";\r\n        clearInput();\r\n    });\r\n}\r\n\r\nfunction clearInput() {\r\n    nameInput.value = \"\";\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\r\n\n\n//# sourceURL=webpack://todo-list-self/./src/createPage.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formCreateBtn = document.querySelector(\".formCreateBtn\");\r\nconst formOne = document.querySelector(\".formOne\");\r\nconst mainContent = document.querySelector(\".mainContent\");\r\n\r\nconst formTwo = document.querySelector(\".formTwo\");\r\nconst formTwoSaveBtn = document.querySelector(\".formTwoSaveBtn\");\r\nconst formTwoCancelBtn = document.querySelector(\".formTwoCancelBtn\");\r\n\r\n\r\nfunction addContent() {\r\n    formCreateBtn.addEventListener(\"click\", function () {\r\n        formOne.style.display = \"none\";\r\n        const pageContent = document.createElement(\"div\");\r\n\r\n        const detailsBtn = document.createElement(\"button\");\r\n        detailsBtn.innerHTML = `Details`;\r\n\r\n        // adding event on details btn\r\n        detailsBtn.addEventListener(\"click\", function () {\r\n            detailsBtn.remove();\r\n            formTwo.style.display = \"block\";\r\n\r\n            formTwoCancelBtn.addEventListener(\"click\",function(){\r\n                formTwo.style.display = \"none\";\r\n                clearInput();\r\n            })\r\n\r\n            // adding event on save btn\r\n            formTwoSaveBtn.addEventListener(\"click\", function (e) {\r\n\r\n                e.preventDefault()\r\n                deleteBtn.remove()\r\n                \r\n\r\n                const dateInput = document.querySelector(\"#dateInput\").value;\r\n                let date = document.createElement(\"p\");\r\n                date.innerHTML = `Due date: ${dateInput}`;\r\n\r\n                const priorityInput =\r\n                    document.querySelector(\"#priorityInput\").value;\r\n                if (priorityInput === \"Low\") {\r\n                    pageContent.style.borderBottom = \"5px solid green\";\r\n                } else if (priorityInput === \"Medium\") {\r\n                    pageContent.style.borderBottom = \"5px solid yellow\";\r\n                } else {\r\n                    pageContent.style.borderBottom = \"5px solid red\";\r\n                }\r\n\r\n                const discriptionInput = document.querySelector(\"#discriptionInput\").value;\r\n                let discription = document.createElement(\"p\");\r\n                discription.innerHTML = `discription: ${discriptionInput}`;\r\n\r\n                const detailsDiv = document.createElement(\"div\");\r\n                pageContent.insertBefore(detailsDiv, pageContent.firstChild);\r\n                \r\n                // add class\r\n                detailsDiv.setAttribute(\"class\", \"detailsDiv\");\r\n                date.setAttribute(\"class\", \"date\");\r\n                discription.setAttribute(\"class\", \"discription\");\r\n                \r\n\r\n                // appending childs\r\n                detailsDiv.appendChild(date);\r\n                detailsDiv.appendChild(discription);\r\n                pageContent.appendChild(detailsDiv)\r\n                \r\n\r\n                formTwo.style.display = \"none\";\r\n                clearInput();\r\n\r\n                // clear button\r\n                const close = document.createElement(\"p\")\r\n                close.innerHTML= \"X\"\r\n                    close.addEventListener(\"click\",function(e){\r\n                        const closeDiv = e.target.parentElement\r\n                        closeDiv.remove()\r\n                    })\r\n                    close.style.cursor = \"pointer\";\r\n                    close.style.fontSize = \"20px\";\r\n                    close.style.color = \"white\";\r\n                pageContent.appendChild(close)\r\n            });\r\n        });\r\n\r\n        const nameInput = document.querySelector(\"#nameInput\").value;\r\n        const titel = document.createElement(\"h1\");\r\n        titel.innerHTML = `${nameInput}`;\r\n        titel.textContent = titel.textContent.toUpperCase() //this is for capital latter\r\n\r\n        const deleteBtn = document.createElement(\"button\");\r\n        deleteBtn.innerHTML = `Delete`;\r\n            deleteBtn.addEventListener(\"click\",function(e){\r\n                const parentDiv = e.target.parentElement\r\n                parentDiv.remove();\r\n            })\r\n\r\n        // giving class\r\n        pageContent.setAttribute(\"class\", \"pageContent\");\r\n        detailsBtn.setAttribute(\"class\", \"detailsBtn\");\r\n        titel.setAttribute(\"class\", \"titel\");\r\n        deleteBtn.setAttribute(\"class\", \"deleteBtn\");\r\n\r\n        // appending childs\r\n        pageContent.appendChild(detailsBtn);\r\n        pageContent.appendChild(titel);\r\n        pageContent.appendChild(deleteBtn);\r\n        mainContent.appendChild(pageContent);\r\n    });\r\n}\r\n\r\nfunction clearInput() {\r\n    document.querySelector(\"#dateInput\").value = \"\";\r\n    document.querySelector(\"#priorityInput\").value = \"\";\r\n    document.querySelector(\"#discriptionInput\").value = \"\";\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addContent);\r\n\n\n//# sourceURL=webpack://todo-list-self/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPage.js */ \"./src/createPage.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\n\r\n(0,_createPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://todo-list-self/./src/index.js?");

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