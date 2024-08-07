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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Signin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Signin.module.css */ \"(app-pages-browser)/./src/styles/Signin.module.css\");\n/* harmony import */ var _styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Signin() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [stayLoggedIn, setStayLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    consy;\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:8000/signin\", {\n                email,\n                password\n            });\n            const { token, userName } = response.data;\n            if (response.status === 200) {\n                if (stayLoggedIn) {\n                    localStorage.setItem(\"auth\", token);\n                    localStorage.setItem(\"userName\", userName);\n                } else {\n                    sessionStorage.setItem(\"auth\", token);\n                    sessionStorage.setItem(\"userName\", userName);\n                }\n                window.alert(\"Sign-in successful! Welcome, \".concat(userName));\n                setEmail(\"\");\n                setPassword(\"\");\n            }\n        } catch (error) {\n            console.error(\"Sign-in error:\", error);\n            if (error.response && error.response.status === 401) {\n                setMessage(\"Invalid email or password\");\n            } else {\n                setMessage(\"Sign-in failed. Please try again.\");\n            }\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Signin\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    checked: stayLoggedIn,\n                                    onChange: ()=>setStayLoggedIn(!stayLoggedIn),\n                                    \"aria-label\": \"Stay logged in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                \"Stay logged in\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                        disabled: loading,\n                        children: loading ? \"Signing In...\" : \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Signin_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 95,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-signup-footer mt-3 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Don't have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/signup\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RAHUL\\\\Desktop\\\\User_Registration_form\\\\client\\\\src\\\\app\\\\signin\\\\page.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Signin, \"P1sutiuDn41OuXV46F3/Ufjh93E=\");\n_c = Signin;\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmluL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDTztBQUNtQjtBQUN2QjtBQUNlO0FBRTdCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFFdkNlO0lBRUEsTUFBTUMsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQkosV0FBVztRQUVYLElBQUk7WUFDRixNQUFNSyxXQUFXLE1BQU1wQiw2Q0FBS0EsQ0FBQ3FCLElBQUksQ0FBQyxnQ0FBZ0M7Z0JBQ2hFZjtnQkFDQUU7WUFDRjtZQUVBLE1BQU0sRUFBRWMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0gsU0FBU0ksSUFBSTtZQUV6QyxJQUFJSixTQUFTSyxNQUFNLEtBQUssS0FBSztnQkFDM0IsSUFBSWIsY0FBYztvQkFDaEJjLGFBQWFDLE9BQU8sQ0FBQyxRQUFRTDtvQkFDN0JJLGFBQWFDLE9BQU8sQ0FBQyxZQUFZSjtnQkFDbkMsT0FBTztvQkFDTEssZUFBZUQsT0FBTyxDQUFDLFFBQVFMO29CQUMvQk0sZUFBZUQsT0FBTyxDQUFDLFlBQVlKO2dCQUNyQztnQkFDQU0sT0FBT0MsS0FBSyxDQUFDLGdDQUF5QyxPQUFUUDtnQkFDN0NoQixTQUFTO2dCQUNURSxZQUFZO1lBQ2Q7UUFDRixFQUFFLE9BQU9zQixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQkFBa0JBO1lBQ2hDLElBQUlBLE1BQU1YLFFBQVEsSUFBSVcsTUFBTVgsUUFBUSxDQUFDSyxNQUFNLEtBQUssS0FBSztnQkFDbkRkLFdBQVc7WUFDYixPQUFPO2dCQUNMQSxXQUFXO1lBQ2I7UUFDRixTQUFVO1lBQ1JJLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFXaEMsNEVBQWdCOzswQkFDOUIsOERBQUNrQztnQkFBR0YsV0FBV2hDLHdFQUFZOzBCQUFFOzs7Ozs7MEJBQzdCLDhEQUFDb0M7Z0JBQUtDLFVBQVV0Qjs7a0NBQ2QsOERBQUNnQjt3QkFBSUMsV0FBV2hDLDRFQUFnQjs7MENBQzlCLDhEQUFDdUM7Z0NBQU1DLFNBQVE7Z0NBQVFSLFdBQVdoQyx3RUFBWTswQ0FBRTs7Ozs7OzBDQUNoRCw4REFBQ3lDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIWCxXQUFXaEMsd0VBQVk7Z0NBQ3ZCNEMsT0FBT3hDO2dDQUNQeUMsVUFBVSxDQUFDN0IsSUFBTVgsU0FBU1csRUFBRThCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDeENHLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ2hCO3dCQUFJQyxXQUFXaEMsNEVBQWdCOzswQ0FDOUIsOERBQUN1QztnQ0FBTUMsU0FBUTtnQ0FBV1IsV0FBV2hDLHdFQUFZOzBDQUFFOzs7Ozs7MENBQ25ELDhEQUFDeUM7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hYLFdBQVdoQyx3RUFBWTtnQ0FDdkI0QyxPQUFPdEM7Z0NBQ1B1QyxVQUFVLENBQUM3QixJQUFNVCxZQUFZUyxFQUFFOEIsTUFBTSxDQUFDRixLQUFLO2dDQUMzQ0csUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDaEI7d0JBQUlDLFdBQVdoQyw0RUFBZ0I7a0NBQzlCLDRFQUFDdUM7OzhDQUNDLDhEQUFDRTtvQ0FDQ0MsTUFBSztvQ0FDTE0sU0FBU3RDO29DQUNUbUMsVUFBVSxJQUFNbEMsZ0JBQWdCLENBQUNEO29DQUNqQ3VDLGNBQVc7Ozs7OztnQ0FDWDs7Ozs7Ozs7Ozs7O2tDQUlOLDhEQUFDQzt3QkFBT1IsTUFBSzt3QkFBU1YsV0FBV2hDLHlFQUFhO3dCQUFFbUQsVUFBVXZDO2tDQUN2REEsVUFBVSxrQkFBa0I7Ozs7Ozs7Ozs7OztZQUdoQ0oseUJBQVcsOERBQUM0QztnQkFBRXBCLFdBQVdoQywwRUFBYzswQkFBR1E7Ozs7OzswQkFDM0MsOERBQUN1QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ29COzt3QkFBRTt3QkFDc0I7c0NBQ3ZCLDhEQUFDbkQsaURBQUlBOzRCQUFDb0QsTUFBTztzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakM7R0FqR3dCbEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaWduaW4vcGFnZS5qcz9mYjIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9TaWduaW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbmluKCkge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RheUxvZ2dlZEluLCBzZXRTdGF5TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3lcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NpZ25pblwiLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyB0b2tlbiwgdXNlck5hbWUgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBpZiAoc3RheUxvZ2dlZEluKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyTmFtZVwiLCB1c2VyTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoXCIsIHRva2VuKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VyTmFtZVwiLCB1c2VyTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hbGVydChgU2lnbi1pbiBzdWNjZXNzZnVsISBXZWxjb21lLCAke3VzZXJOYW1lfWApO1xyXG4gICAgICAgIHNldEVtYWlsKFwiXCIpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiU2lnbi1pbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICBzZXRNZXNzYWdlKFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNZXNzYWdlKFwiU2lnbi1pbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlNpZ25pbjwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtzdGF5TG9nZ2VkSW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFN0YXlMb2dnZWRJbighc3RheUxvZ2dlZEluKX1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU3RheSBsb2dnZWQgaW5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBTdGF5IGxvZ2dlZCBpblxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IGRpc2FibGVkPXtsb2FkaW5nfT5cclxuICAgICAgICAgIHtsb2FkaW5nID8gXCJTaWduaW5nIEluLi4uXCIgOiBcIlNpZ24gSW5cIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7bWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT57bWVzc2FnZX08L3A+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2lnbnVwLWZvb3RlciBtdC0zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9zaWdudXBgfT5cclxuICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwic3R5bGVzIiwiTGluayIsInVzZVJvdXRlciIsIlNpZ25pbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzdGF5TG9nZ2VkSW4iLCJzZXRTdGF5TG9nZ2VkSW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbnN5IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwidG9rZW4iLCJ1c2VyTmFtZSIsImRhdGEiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2Vzc2lvblN0b3JhZ2UiLCJ3aW5kb3ciLCJhbGVydCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwidGl0bGUiLCJmb3JtIiwib25TdWJtaXQiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImNoZWNrZWQiLCJhcmlhLWxhYmVsIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signin/page.js\n"));

/***/ })

});