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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Signin.module.css */ \"(app-pages-browser)/./src/styles/Signin.module.css\");\n/* harmony import */ var _styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Signin() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [stayLoggedIn, setStayLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:8000/signin\", {\n                email,\n                password\n            });\n            const { token, userName } = response.data;\n            if (response.status === 200) {\n                if (stayLoggedIn) {\n                    localStorage.setItem(\"auth\", token);\n                    localStorage.setItem(\"userName\", userName);\n                } else {\n                    sessionStorage.setItem(\"auth\", token);\n                    sessionStorage.setItem(\"userName\", userName);\n                }\n                setEmail(\"\");\n                setPassword(\"\");\n            }\n        } catch (error) {\n            console.error(\"Sign-in error:\", error);\n            if (error.response && error.response.status === 401) {\n                setMessage(\"Invalid email or password\");\n            } else {\n                setMessage(\"Sign-in failed. Please try again.\");\n            }\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Signin\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    checked: stayLoggedIn,\n                                    onChange: ()=>setStayLoggedIn(!stayLoggedIn),\n                                    \"aria-label\": \"Stay logged in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                \"Stay logged in\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                        disabled: loading,\n                        children: loading ? \"Signing In...\" : \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 95,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-signup-footer mt-3 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Don't have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/signup\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Signin, \"lBx35OBnVgElsIbJpWhljvWB55M=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Signin;\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmluL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDTztBQUNtQjtBQUN2QjtBQUNlO0FBRTdCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWUsU0FBU1osMERBQVNBO0lBRXhCLE1BQU1hLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJKLFdBQVc7UUFFWCxJQUFJO1lBQ0YsTUFBTUssV0FBVyxNQUFNcEIsNkNBQUtBLENBQUNxQixJQUFJLENBQUMsZ0NBQWdDO2dCQUNoRWY7Z0JBQ0FFO1lBQ0Y7WUFFQSxNQUFNLEVBQUVjLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdILFNBQVNJLElBQUk7WUFFekMsSUFBSUosU0FBU0ssTUFBTSxLQUFLLEtBQUs7Z0JBQzNCLElBQUliLGNBQWM7b0JBQ2hCYyxhQUFhQyxPQUFPLENBQUMsUUFBUUw7b0JBQzdCSSxhQUFhQyxPQUFPLENBQUMsWUFBWUo7Z0JBQ25DLE9BQU87b0JBQ0xLLGVBQWVELE9BQU8sQ0FBQyxRQUFRTDtvQkFDL0JNLGVBQWVELE9BQU8sQ0FBQyxZQUFZSjtnQkFDckM7Z0JBRUFoQixTQUFTO2dCQUNURSxZQUFZO1lBQ2Q7UUFDRixFQUFFLE9BQU9vQixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQkFBa0JBO1lBQ2hDLElBQUlBLE1BQU1ULFFBQVEsSUFBSVMsTUFBTVQsUUFBUSxDQUFDSyxNQUFNLEtBQUssS0FBSztnQkFDbkRkLFdBQVc7WUFDYixPQUFPO2dCQUNMQSxXQUFXO1lBQ2I7UUFDRixTQUFVO1lBQ1JJLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFXOUIsNEVBQWdCOzswQkFDOUIsOERBQUNnQztnQkFBR0YsV0FBVzlCLHdFQUFZOzBCQUFFOzs7Ozs7MEJBQzdCLDhEQUFDa0M7Z0JBQUtDLFVBQVVwQjs7a0NBQ2QsOERBQUNjO3dCQUFJQyxXQUFXOUIsNEVBQWdCOzswQ0FDOUIsOERBQUNxQztnQ0FBTUMsU0FBUTtnQ0FBUVIsV0FBVzlCLHdFQUFZOzBDQUFFOzs7Ozs7MENBQ2hELDhEQUFDdUM7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hYLFdBQVc5Qix3RUFBWTtnQ0FDdkIwQyxPQUFPdEM7Z0NBQ1B1QyxVQUFVLENBQUMzQixJQUFNWCxTQUFTVyxFQUFFNEIsTUFBTSxDQUFDRixLQUFLO2dDQUN4Q0csUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDaEI7d0JBQUlDLFdBQVc5Qiw0RUFBZ0I7OzBDQUM5Qiw4REFBQ3FDO2dDQUFNQyxTQUFRO2dDQUFXUixXQUFXOUIsd0VBQVk7MENBQUU7Ozs7OzswQ0FDbkQsOERBQUN1QztnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSFgsV0FBVzlCLHdFQUFZO2dDQUN2QjBDLE9BQU9wQztnQ0FDUHFDLFVBQVUsQ0FBQzNCLElBQU1ULFlBQVlTLEVBQUU0QixNQUFNLENBQUNGLEtBQUs7Z0NBQzNDRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNoQjt3QkFBSUMsV0FBVzlCLDRFQUFnQjtrQ0FDOUIsNEVBQUNxQzs7OENBQ0MsOERBQUNFO29DQUNDQyxNQUFLO29DQUNMTSxTQUFTcEM7b0NBQ1RpQyxVQUFVLElBQU1oQyxnQkFBZ0IsQ0FBQ0Q7b0NBQ2pDcUMsY0FBVzs7Ozs7O2dDQUNYOzs7Ozs7Ozs7Ozs7a0NBSU4sOERBQUNDO3dCQUFPUixNQUFLO3dCQUFTVixXQUFXOUIseUVBQWE7d0JBQUVpRCxVQUFVckM7a0NBQ3ZEQSxVQUFVLGtCQUFrQjs7Ozs7Ozs7Ozs7O1lBR2hDSix5QkFBVyw4REFBQzBDO2dCQUFFcEIsV0FBVzlCLDBFQUFjOzBCQUFHUTs7Ozs7OzBCQUMzQyw4REFBQ3FCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDb0I7O3dCQUFFO3dCQUNzQjtzQ0FDdkIsOERBQUNqRCxpREFBSUE7NEJBQUNrRCxNQUFPO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQztHQWpHd0JoRDs7UUFPUEQsc0RBQVNBOzs7S0FQRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaWduaW4vcGFnZS5qcz9mYjIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9TaWduaW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbmluKCkge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RheUxvZ2dlZEluLCBzZXRTdGF5TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zaWduaW5cIiwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXJOYW1lIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgaWYgKHN0YXlMb2dnZWRJbikge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoXCIsIHRva2VuKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgdXNlck5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFwiLCB0b2tlbik7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgdXNlck5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRFbWFpbChcIlwiKTtcclxuICAgICAgICBzZXRQYXNzd29yZChcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlNpZ24taW4gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlNpZ24taW4gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5TaWduaW48L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c3RheUxvZ2dlZElufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTdGF5TG9nZ2VkSW4oIXN0YXlMb2dnZWRJbil9XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXkgbG9nZ2VkIGluXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgU3RheSBsb2dnZWQgaW5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IFwiU2lnbmluZyBJbi4uLlwiIDogXCJTaWduIEluXCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+e21lc3NhZ2V9PC9wPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNpZ251cC1mb290ZXIgbXQtMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2lnbnVwYH0+XHJcbiAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJTaWduaW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3RheUxvZ2dlZEluIiwic2V0U3RheUxvZ2dlZEluIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJ0b2tlbiIsInVzZXJOYW1lIiwiZGF0YSIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwidGl0bGUiLCJmb3JtIiwib25TdWJtaXQiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImNoZWNrZWQiLCJhcmlhLWxhYmVsIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signin/page.js\n"));

/***/ })

});