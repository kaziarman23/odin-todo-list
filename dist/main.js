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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navCreateBtn = document.querySelector(\".navCreateBtn\")\r\nconst navClearBtn = document.querySelector(\".navClearBtn\")\r\nconst formOne = document.querySelector(\".formOne\")\r\nconst formCancelBtn = document.querySelector(\".formCancelBtn\")\r\nconst nameInput = document.querySelector(\"#nameInput\")\r\nconst mainDiv = document.querySelector(\".mainDiv\")\r\n\r\n\r\nfunction createPage(){\r\n    navCreateBtn.addEventListener(\"click\",function(){\r\n        formOne.style.display = \"block\"\r\n        clearInput()\r\n    })\r\n    navClearBtn.addEventListener(\"click\",function(){\r\n        formOne.style.display = \"none\"\r\n        mainDiv.value =\"\";\r\n        clearInput()\r\n    })\r\n    formCancelBtn.addEventListener(\"click\",function(){\r\n        formOne.style.display = \"none\"\r\n        clearInput()\r\n    })\r\n}\r\n\r\nfunction clearInput(){\r\n    nameInput.value =\"\";\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\n\n//# sourceURL=webpack://todo-list-self/./src/createPage.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formCreateBtn = document.querySelector(\".formCreateBtn\");\r\nconst formOne = document.querySelector(\".formOne\");\r\nconst mainContent = document.querySelector(\".mainContent\");\r\n\r\n\r\nfunction addContent() {\r\n    formCreateBtn.addEventListener(\"click\", function () {\r\n        formOne.style.display = \"none\";\r\n        const pageContent = document.createElement(\"div\")\r\n       \r\n        const detailsBtn = document.createElement(\"button\")\r\n        detailsBtn.innerHTML = `Details`\r\n            // detailsBtn.addEventListener(\"click\",function(){\r\n            //     detailsBtn.remove()\r\n\r\n            // })\r\n\r\n\r\n        const nameInput = document.querySelector(\"#nameInput\").value\r\n        let titel = document.createElement(\"h1\")\r\n        titel.innerHTML =`${nameInput}`\r\n\r\n        const deleteBtn = document.createElement(\"button\")\r\n        deleteBtn.innerHTML= `Delete`\r\n        // have to add event listener\r\n        \r\n\r\n        // giving class\r\n        pageContent.setAttribute(\"class\",\"pageContent\")\r\n        detailsBtn.setAttribute(\"class\",\"detailsBtn\")\r\n        titel.setAttribute(\"class\",\"titel\")\r\n        deleteBtn.setAttribute(\"class\",\"detailsBtn\")\r\n\r\n        // appending childs\r\n        pageContent.appendChild(detailsBtn)\r\n        pageContent.appendChild(titel)\r\n        pageContent.appendChild(deleteBtn)\r\n        mainContent.appendChild(pageContent)\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addContent);\r\n\n\n//# sourceURL=webpack://todo-list-self/./src/dom.js?");

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