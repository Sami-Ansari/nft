"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/nft-storage";
exports.ids = ["pages/api/nft-storage"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "nft.storage":
/*!******************************!*\
  !*** external "nft.storage" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("nft.storage");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/nft-storage.ts":
/*!**************************************!*\
  !*** ./src/pages/api/nft-storage.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nft_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nft.storage */ \"nft.storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nft_storage__WEBPACK_IMPORTED_MODULE_2__]);\nnft_storage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst client = new nft_storage__WEBPACK_IMPORTED_MODULE_2__.NFTStorage({\n    token: `${process.env.NFT_STORAGE_KEY}`\n});\nconst handler = async (req, res)=>{\n    if (req.method != \"POST\") {\n        return res.status(403).json({\n            error: `Unsupported method ${req.method}`\n        });\n    }\n    try {\n        // Parse req body and save image in /tmp\n        const data = await new Promise((res, rej)=>{\n            const uploadDir = `${process.cwd()}/tmp`;\n            const form = formidable__WEBPACK_IMPORTED_MODULE_0___default()({\n                multiples: true,\n                uploadDir\n            });\n            form.parse(req, (err, fields, files)=>{\n                if (err) rej(err);\n                res({\n                    ...fields,\n                    ...files\n                });\n            });\n        });\n        // Read image from /tmp\n        const { filepath , originalFilename =\"image\" , mimetype =\"image\" ,  } = data.image;\n        const buffer = (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)(data.image.filepath);\n        const arraybuffer = Uint8Array.from(buffer).buffer;\n        const file = new nft_storage__WEBPACK_IMPORTED_MODULE_2__.File([\n            arraybuffer\n        ], originalFilename, {\n            type: mimetype\n        });\n        // Upload data to nft.storage\n        const metadata = await client.store({\n            name: data.name,\n            description: data.description,\n            image: file\n        });\n        // Delete tmp image\n        (0,fs__WEBPACK_IMPORTED_MODULE_1__.unlinkSync)(filepath);\n        // return tokenURI\n        res.status(201).json({\n            uri: metadata.url\n        });\n    } catch (e) {\n        console.log(e);\n        return res.status(400).json(e);\n    }\n};\n// Must disable bodyParser for formidable to work\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sR0FBRztJQUNwQkMsR0FBRyxFQUFFO1FBQ0hDLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YsQ0FBQztBQUVGLGlFQUFldkMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0Ly4vc3JjL3BhZ2VzL2FwaS9uZnQtc3RvcmFnZS50cz8wYjI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JtaWRhYmxlIGZyb20gXCJmb3JtaWRhYmxlXCI7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHVubGlua1N5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEZpbGUsIE5GVFN0b3JhZ2UgfSBmcm9tIFwibmZ0LnN0b3JhZ2VcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IE5GVFN0b3JhZ2UoeyB0b2tlbjogYCR7cHJvY2Vzcy5lbnYuTkZUX1NUT1JBR0VfS0VZfWAgfSk7XG5cbmNvbnN0IGhhbmRsZXI6IE5leHRBcGlIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kICE9IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyb3I6IGBVbnN1cHBvcnRlZCBtZXRob2QgJHtyZXEubWV0aG9kfWAgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBQYXJzZSByZXEgYm9keSBhbmQgc2F2ZSBpbWFnZSBpbiAvdG1wXG4gICAgY29uc3QgZGF0YTogYW55ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICBjb25zdCB1cGxvYWREaXIgPSBgJHtwcm9jZXNzLmN3ZCgpfS90bXBgO1xuICAgICAgY29uc3QgZm9ybSA9IGZvcm1pZGFibGUoeyBtdWx0aXBsZXM6IHRydWUsIHVwbG9hZERpciB9KTtcbiAgICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJlaihlcnIpO1xuICAgICAgICByZXMoeyAuLi5maWVsZHMsIC4uLmZpbGVzIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUmVhZCBpbWFnZSBmcm9tIC90bXBcbiAgICBjb25zdCB7XG4gICAgICBmaWxlcGF0aCxcbiAgICAgIG9yaWdpbmFsRmlsZW5hbWUgPSBcImltYWdlXCIsXG4gICAgICBtaW1ldHlwZSA9IFwiaW1hZ2VcIixcbiAgICB9ID0gZGF0YS5pbWFnZTtcbiAgICBjb25zdCBidWZmZXIgPSByZWFkRmlsZVN5bmMoZGF0YS5pbWFnZS5maWxlcGF0aCk7XG4gICAgY29uc3QgYXJyYXlidWZmZXIgPSBVaW50OEFycmF5LmZyb20oYnVmZmVyKS5idWZmZXI7XG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKFthcnJheWJ1ZmZlcl0sIG9yaWdpbmFsRmlsZW5hbWUsIHtcbiAgICAgIHR5cGU6IG1pbWV0eXBlLFxuICAgIH0pO1xuICAgIC8vIFVwbG9hZCBkYXRhIHRvIG5mdC5zdG9yYWdlXG4gICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBjbGllbnQuc3RvcmUoe1xuICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZTogZmlsZSxcbiAgICB9KTtcbiAgICAvLyBEZWxldGUgdG1wIGltYWdlXG4gICAgdW5saW5rU3luYyhmaWxlcGF0aCk7XG4gICAgLy8gcmV0dXJuIHRva2VuVVJJXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyB1cmk6IG1ldGFkYXRhLnVybCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlKTtcbiAgfVxufTtcblxuLy8gTXVzdCBkaXNhYmxlIGJvZHlQYXJzZXIgZm9yIGZvcm1pZGFibGUgdG8gd29ya1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImZvcm1pZGFibGUiLCJyZWFkRmlsZVN5bmMiLCJ1bmxpbmtTeW5jIiwiRmlsZSIsIk5GVFN0b3JhZ2UiLCJjbGllbnQiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJORlRfU1RPUkFHRV9LRVkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZGF0YSIsIlByb21pc2UiLCJyZWoiLCJ1cGxvYWREaXIiLCJjd2QiLCJmb3JtIiwibXVsdGlwbGVzIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImZpbGVwYXRoIiwib3JpZ2luYWxGaWxlbmFtZSIsIm1pbWV0eXBlIiwiaW1hZ2UiLCJidWZmZXIiLCJhcnJheWJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJmcm9tIiwiZmlsZSIsInR5cGUiLCJtZXRhZGF0YSIsInN0b3JlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidXJpIiwidXJsIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/nft-storage.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/nft-storage.ts"));
module.exports = __webpack_exports__;

})();