"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"(app-pages-browser)/./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_unauthenticated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/unauthenticated */ \"(app-pages-browser)/./src/components/unauthenticated.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const getToken = sessionStorage.getItem(\"auth\") || localStorage.getItem(\"auth\");\n        if (getToken) {\n            setToken(true);\n            const getName = sessionStorage.getItem(\"name\") || localStorage.getItem(\"name\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Welcome to the User Registration Page!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\page.js\",\n            lineNumber: 27,\n            columnNumber: 14\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_unauthenticated__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\page.js\",\n            lineNumber: 27,\n            columnNumber: 63\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"uD5dHg3L7yhdaMb3qu6Otz/227s=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNnQjtBQUNIO0FBQ2U7QUFDZjtBQUU3QixTQUFTTTs7SUFFdEIsTUFBTUMsU0FBU0wsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFFO1FBQ1QsTUFBTVEsV0FBV0MsZUFBZUMsT0FBTyxDQUFDLFdBQVdDLGFBQWFELE9BQU8sQ0FBQztRQUN4RSxJQUFHRixVQUFTO1lBQ1ZILFNBQVM7WUFDVCxNQUFNTyxVQUFVSCxlQUFlQyxPQUFPLENBQUMsV0FBV0MsYUFBYUQsT0FBTyxDQUFDO1FBQ3pFO0lBQ0YsR0FBRSxFQUFFO0lBRUoscUJBQ0M7a0JBRUdOLHNCQUFPLDhEQUFDUztzQkFBRzs7Ozs7aUNBQTZDLDhEQUFDZCxtRUFBZUE7Ozs7OztBQUk5RTtHQXRCd0JHOztRQUVQSixzREFBU0E7OztLQUZGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBVbmF1dGhlbnRpY2F0ZWQgZnJvbSBcIkAvY29tcG9uZW50cy91bmF1dGhlbnRpY2F0ZWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoICgpPT4ge1xyXG4gICAgY29uc3QgZ2V0VG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIilcclxuICAgIGlmKGdldFRva2VuKXtcclxuICAgICAgc2V0VG9rZW4odHJ1ZSlcclxuICAgICAgY29uc3QgZ2V0TmFtZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKVxyXG4gICAgfVxyXG4gIH0sW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICA8PlxyXG4gICAgIHtcclxuICAgICAgdG9rZW4gPzxoMT5XZWxjb21lIHRvIHRoZSBVc2VyIFJlZ2lzdHJhdGlvbiBQYWdlITwvaDE+OiA8VW5hdXRoZW50aWNhdGVkPjwvVW5hdXRoZW50aWNhdGVkPlxyXG4gICAgIH0gICAgIFxyXG4gICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsInVzZVJvdXRlciIsIlVuYXV0aGVudGljYXRlZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInJvdXRlciIsInRva2VuIiwic2V0VG9rZW4iLCJuYW1lIiwic2V0TmFtZSIsImdldFRva2VuIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxTdG9yYWdlIiwiZ2V0TmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});