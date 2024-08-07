"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./src/app/signin/page.js":
/*!********************************!*\
  !*** ./src/app/signin/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Signin.module.css */ \"(app-pages-browser)/./src/styles/Signin.module.css\");\n/* harmony import */ var _styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Signin() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [stayLoggedIn, setStayLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000/signin\", {\n                email,\n                password\n            });\n            // Assuming the response contains a token\n            const token = response.data.token;\n            if (response.status === 200) {\n                if (stayLoggedIn) {\n                    localStorage.setItem(\"auth\", token);\n                } else {\n                    sessionStorage.setItem(\"auth\", token);\n                }\n                setMessage(\"Sign-in successful!\");\n            }\n        } catch (error) {\n            console.error(\"Sign-in error:\", error);\n            if (error.response && error.response.status === 401) {\n                setMessage(\"Invalid email or password\");\n            } else {\n                setMessage(\"Sign-in failed. Please try again.\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Signin\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    checked: stayLoggedIn,\n                                    onChange: ()=>setStayLoggedIn(!stayLoggedIn)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                \"Stay logged in\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 80,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Signin, \"JW31vcl8lmR4tZeiz0Uxxg7lxeE=\");\n_c = Signin;\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmluL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ087QUFDbUI7QUFFckMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1XLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWYsNkNBQUtBLENBQUNnQixJQUFJLENBQUMsZ0NBQWdDO2dCQUNoRVo7Z0JBQ0FFO1lBQ0Y7WUFFQSx5Q0FBeUM7WUFDekMsTUFBTVcsUUFBUUYsU0FBU0csSUFBSSxDQUFDRCxLQUFLO1lBRWpDLElBQUlGLFNBQVNJLE1BQU0sS0FBSyxLQUFLO2dCQUMzQixJQUFJVCxjQUFjO29CQUNoQlUsYUFBYUMsT0FBTyxDQUFDLFFBQVFKO2dCQUMvQixPQUFPO29CQUNMSyxlQUFlRCxPQUFPLENBQUMsUUFBUUo7Z0JBQ2pDO2dCQUNBUixXQUFXO1lBQ2I7UUFDRixFQUFFLE9BQU9jLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGtCQUFrQkE7WUFDaEMsSUFBSUEsTUFBTVIsUUFBUSxJQUFJUSxNQUFNUixRQUFRLENBQUNJLE1BQU0sS0FBSyxLQUFLO2dCQUNuRFYsV0FBVztZQUNiLE9BQU87Z0JBQ0xBLFdBQVc7WUFDYjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVd4Qiw0RUFBZ0I7OzBCQUM5Qiw4REFBQzBCO2dCQUFHRixXQUFXeEIsd0VBQVk7MEJBQUU7Ozs7OzswQkFDN0IsOERBQUM0QjtnQkFBS0MsVUFBVW5COztrQ0FDZCw4REFBQ2E7d0JBQUlDLFdBQVd4Qiw0RUFBZ0I7OzBDQUM5Qiw4REFBQytCO2dDQUFNQyxTQUFRO2dDQUFRUixXQUFXeEIsd0VBQVk7MENBQUU7Ozs7OzswQ0FDaEQsOERBQUNpQztnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSFgsV0FBV3hCLHdFQUFZO2dDQUN2Qm9DLE9BQU9sQztnQ0FDUG1DLFVBQVUsQ0FBQzFCLElBQU1SLFNBQVNRLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7Z0NBQ3hDRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNoQjs7MENBQ0MsOERBQUNRO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsT0FBT2hDO2dDQUNQaUMsVUFBVSxDQUFDMUIsSUFBTU4sWUFBWU0sRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDM0NHLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ2hCO2tDQUNDLDRFQUFDUTs7OENBQ0MsOERBQUNFO29DQUNDQyxNQUFLO29DQUNMTSxTQUFTaEM7b0NBQ1Q2QixVQUFVLElBQU01QixnQkFBZ0IsQ0FBQ0Q7Ozs7OztnQ0FDakM7Ozs7Ozs7Ozs7OztrQ0FJTiw4REFBQ2lDO3dCQUFPUCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7WUFFdkI1Qix5QkFBVyw4REFBQ29DO2dCQUFFbEIsV0FBV3hCLDBFQUFjOzBCQUFHTTs7Ozs7Ozs7Ozs7O0FBR2pEO0dBNUV3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaWduaW4vcGFnZS5qcz9mYjIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9TaWduaW4ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduaW4oKSB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF5TG9nZ2VkSW4sIHNldFN0YXlMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zaWduaW5cIiwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFzc3VtaW5nIHRoZSByZXNwb25zZSBjb250YWlucyBhIHRva2VuXHJcbiAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGlmIChzdGF5TG9nZ2VkSW4pIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFwiLCB0b2tlbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlNpZ24taW4gc3VjY2Vzc2Z1bCFcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJTaWduLWluIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoXCJTaWduLWluIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlNpZ25pbjwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtzdGF5TG9nZ2VkSW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFN0YXlMb2dnZWRJbighc3RheUxvZ2dlZEluKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgU3RheSBsb2dnZWQgaW5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PnttZXNzYWdlfTwvcD59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaWduaW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3RheUxvZ2dlZEluIiwic2V0U3RheUxvZ2dlZEluIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwidG9rZW4iLCJkYXRhIiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNlc3Npb25TdG9yYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsImZvcm0iLCJvblN1Ym1pdCIsImZvcm1Hcm91cCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiY2hlY2tlZCIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signin/page.js\n"));

/***/ })

});