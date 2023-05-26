"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  font-family: 'Sarabun', sans-serif;\n  letter-spacing: 0.03rem;\n}\n\n#page {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1.5fr 4fr;\n}\n\nnav {\n  background-color: #3a3a3a;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 8px;\n  display: grid;\n  grid-template-rows: auto 1fr auto auto;\n}\n\nmain {\n  background-color: #2c2c2c;\n}\n\nnav,\nmain {\n  padding: 12px 20px;\n}\n\nli {\n  list-style: none;\n}\n\nh1 {\n  font-weight: 600;\n  margin-bottom: 12px;\n  font-size: 2.25rem;\n}\n\nli,\nh1,\nlabel {\n  color: #e0e1dd;\n}\n\n.project-cont {\n  display: flex;\n  flex-direction: column;\n}\n\n.project-cont .title {\n  font-size: 1.25rem;\n  padding: 8px;\n  cursor: pointer;\n  margin-bottom: 8px;\n}\n\n.project-cont .title.current {\n  background-color: #2c2c2c;\n  border-radius: 6px;\n}\n\n.todos-cont {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.todo-card {\n  padding: 8px 16px;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: #1d1d1d;\n  display: grid;\n  grid-template-columns: 1fr auto;\n}\n\n.todo-card .title {\n  font-size: 1.45rem;\n  font-weight: 600;\n}\n\n.todo-card .title.complete {\n  text-decoration: line-through;\n  color: #a0a0a0;\n}\n\n.desc,\n.date {\n  font-size: 1.1rem;\n}\n\n.desc {\n  padding-top: 8px;\n}\n\n.date {\n  padding-bottom: 8px;\n}\n\n.todo-btns,\n.project-cont .title {\n  position: relative;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.project-cont .title button,\n.todo-btns button,\n.form-cont .delete {\n  background-color: transparent;\n  border: 0;\n}\n\n.todo-btns {\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 6px;\n}\n\n.view img,\n.complete img,\n.important img {\n  filter: invert(72%) sepia(0%) saturate(35%) hue-rotate(145deg) brightness(89%)\n    contrast(89%);\n}\n.view img {\n  width: 24px;\n  height: 24px;\n}\n\n.view img:hover {\n  filter: invert(67%) sepia(61%) saturate(390%) hue-rotate(178deg)\n    brightness(106%) contrast(101%);\n}\n\n.view.highlight img {\n  filter: invert(49%) sepia(58%) saturate(904%) hue-rotate(166deg)\n    brightness(83%) contrast(99%);\n}\n\n.complete img,\n.important img {\n  width: 20px;\n  height: 20px;\n}\n\n.complete img:hover {\n  filter: invert(81%) sepia(37%) saturate(435%) hue-rotate(66deg)\n    brightness(90%) contrast(86%);\n}\n\n.complete.highlight img {\n  filter: invert(42%) sepia(39%) saturate(568%) hue-rotate(71deg)\n    brightness(102%) contrast(89%);\n}\n\n.important img:hover {\n  filter: invert(75%) sepia(62%) saturate(2353%) hue-rotate(307deg)\n    brightness(91%) contrast(72%);\n}\n\n.important.highlight img {\n  filter: invert(13%) sepia(87%) saturate(3059%) hue-rotate(348deg)\n    brightness(115%) contrast(84%);\n}\n\n.delete {\n  color: #a0a0a0;\n  padding: 6px;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.delete {\n  position: absolute;\n}\n\n.project-cont .title .delete,\n.form-cont .delete {\n  top: -15px;\n  right: -10px;\n}\n\n.todo-btns .delete {\n  top: -28px;\n  right: -26px;\n}\n\n.delete:hover {\n  color: #760000;\n}\n\n.create-project,\n.create-todo {\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 0;\n  font-weight: 600;\n  color: #e0e1dd;\n  font-size: 1rem;\n}\n\n.create-project {\n  background-color: #178bd3;\n  margin-bottom: 10px;\n}\n\n.create-project:active {\n  background-color: #3ca7e9;\n}\n\n.create-todo {\n  background-color: #488a48;\n}\n\n.create-todo:active {\n  background-color: #57a557;\n}\n\n.hidden {\n  display: none;\n}\n\n.blur {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-cont {\n  background-color: #3a3a3a;\n  padding: 40px;\n  border-radius: 6px;\n  position: fixed;\n  top: 25%;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.form-cont h1 {\n  text-align: center;\n  font-size: 1.75rem;\n}\n\nform div:not(:nth-of-type(4)) {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n\nlabel {\n  font-size: 1.25rem;\n}\n\nlabel:last-of-type {\n  margin-right: 6px;\n}\n\ninput {\n  font-family: inherit;\n  font-size: 1.1rem;\n  padding: 6px 6px;\n  border: 0;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\ninput:focus {\n  outline: solid 2px #178bd3;\n  border: 0;\n}\n\nform .create-todo {\n  width: 100%;\n  margin-top: 10px;\n}\n\nform .create-project {\n  width: 100%;\n  margin-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  font-family: 'Sarabun', sans-serif;\n  letter-spacing: 0.03rem;\n}\n\n#page {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1.5fr 4fr;\n}\n\nnav {\n  background-color: #3a3a3a;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 8px;\n  display: grid;\n  grid-template-rows: auto 1fr auto auto;\n}\n\nmain {\n  background-color: #2c2c2c;\n}\n\nnav,\nmain {\n  padding: 12px 20px;\n}\n\nli {\n  list-style: none;\n}\n\nh1 {\n  font-weight: 600;\n  margin-bottom: 12px;\n  font-size: 2.25rem;\n}\n\nli,\nh1,\nlabel {\n  color: #e0e1dd;\n}\n\n.project-cont {\n  display: flex;\n  flex-direction: column;\n}\n\n.project-cont .title {\n  font-size: 1.25rem;\n  padding: 8px;\n  cursor: pointer;\n  margin-bottom: 8px;\n}\n\n.project-cont .title.current {\n  background-color: #2c2c2c;\n  border-radius: 6px;\n}\n\n.todos-cont {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.todo-card {\n  padding: 8px 16px;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: #1d1d1d;\n  display: grid;\n  grid-template-columns: 1fr auto;\n}\n\n.todo-card .title {\n  font-size: 1.45rem;\n  font-weight: 600;\n}\n\n.todo-card .title.complete {\n  text-decoration: line-through;\n  color: #a0a0a0;\n}\n\n.desc,\n.date {\n  font-size: 1.1rem;\n}\n\n.desc {\n  padding-top: 8px;\n}\n\n.date {\n  padding-bottom: 8px;\n}\n\n.todo-btns,\n.project-cont .title {\n  position: relative;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.project-cont .title button,\n.todo-btns button,\n.form-cont .delete {\n  background-color: transparent;\n  border: 0;\n}\n\n.todo-btns {\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 6px;\n}\n\n.view img,\n.complete img,\n.important img {\n  filter: invert(72%) sepia(0%) saturate(35%) hue-rotate(145deg) brightness(89%)\n    contrast(89%);\n}\n.view img {\n  width: 24px;\n  height: 24px;\n}\n\n.view img:hover {\n  filter: invert(67%) sepia(61%) saturate(390%) hue-rotate(178deg)\n    brightness(106%) contrast(101%);\n}\n\n.view.highlight img {\n  filter: invert(49%) sepia(58%) saturate(904%) hue-rotate(166deg)\n    brightness(83%) contrast(99%);\n}\n\n.complete img,\n.important img {\n  width: 20px;\n  height: 20px;\n}\n\n.complete img:hover {\n  filter: invert(81%) sepia(37%) saturate(435%) hue-rotate(66deg)\n    brightness(90%) contrast(86%);\n}\n\n.complete.highlight img {\n  filter: invert(42%) sepia(39%) saturate(568%) hue-rotate(71deg)\n    brightness(102%) contrast(89%);\n}\n\n.important img:hover {\n  filter: invert(75%) sepia(62%) saturate(2353%) hue-rotate(307deg)\n    brightness(91%) contrast(72%);\n}\n\n.important.highlight img {\n  filter: invert(13%) sepia(87%) saturate(3059%) hue-rotate(348deg)\n    brightness(115%) contrast(84%);\n}\n\n.delete {\n  color: #a0a0a0;\n  padding: 6px;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.delete {\n  position: absolute;\n}\n\n.project-cont .title .delete,\n.form-cont .delete {\n  top: -15px;\n  right: -10px;\n}\n\n.todo-btns .delete {\n  top: -28px;\n  right: -26px;\n}\n\n.delete:hover {\n  color: #760000;\n}\n\n.create-project,\n.create-todo {\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 0;\n  font-weight: 600;\n  color: #e0e1dd;\n  font-size: 1rem;\n}\n\n.create-project {\n  background-color: #178bd3;\n  margin-bottom: 10px;\n}\n\n.create-project:active {\n  background-color: #3ca7e9;\n}\n\n.create-todo {\n  background-color: #488a48;\n}\n\n.create-todo:active {\n  background-color: #57a557;\n}\n\n.hidden {\n  display: none;\n}\n\n.blur {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-cont {\n  background-color: #3a3a3a;\n  padding: 40px;\n  border-radius: 6px;\n  position: fixed;\n  top: 25%;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.form-cont h1 {\n  text-align: center;\n  font-size: 1.75rem;\n}\n\nform div:not(:nth-of-type(4)) {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n\nlabel {\n  font-size: 1.25rem;\n}\n\nlabel:last-of-type {\n  margin-right: 6px;\n}\n\ninput {\n  font-family: inherit;\n  font-size: 1.1rem;\n  padding: 6px 6px;\n  border: 0;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\ninput:focus {\n  outline: solid 2px #178bd3;\n  border: 0;\n}\n\nform .create-todo {\n  width: 100%;\n  margin-top: 10px;\n}\n\nform .create-project {\n  width: 100%;\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


console.log('helloooo webpack server!');


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFB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QUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JxQjs7QUFFckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2FyYWJ1bjp3Z2h0QDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogJ1NhcmFidW4nLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XFxufVxcblxcbiNwYWdlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDRmcjtcXG59XFxuXFxubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCA4cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIGF1dG87XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcXG59XFxuXFxubmF2LFxcbm1haW4ge1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxubGksXFxuaDEsXFxubGFiZWwge1xcbiAgY29sb3I6ICNlMGUxZGQ7XFxufVxcblxcbi5wcm9qZWN0LWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LWNvbnQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnByb2plY3QtY29udCAudGl0bGUuY3VycmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udG9kb3MtY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG8tY2FyZCB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxufVxcblxcbi50b2RvLWNhcmQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50b2RvLWNhcmQgLnRpdGxlLmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICNhMGEwYTA7XFxufVxcblxcbi5kZXNjLFxcbi5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZGVzYyB7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG5cXG4uZGF0ZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4udG9kby1idG5zLFxcbi5wcm9qZWN0LWNvbnQgLnRpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtY29udCAudGl0bGUgYnV0dG9uLFxcbi50b2RvLWJ0bnMgYnV0dG9uLFxcbi5mb3JtLWNvbnQgLmRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnRvZG8tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxufVxcblxcbi52aWV3IGltZyxcXG4uY29tcGxldGUgaW1nLFxcbi5pbXBvcnRhbnQgaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDcyJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDM1JSkgaHVlLXJvdGF0ZSgxNDVkZWcpIGJyaWdodG5lc3MoODklKVxcbiAgICBjb250cmFzdCg4OSUpO1xcbn1cXG4udmlldyBpbWcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi52aWV3IGltZzpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCg2NyUpIHNlcGlhKDYxJSkgc2F0dXJhdGUoMzkwJSkgaHVlLXJvdGF0ZSgxNzhkZWcpXFxuICAgIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAxJSk7XFxufVxcblxcbi52aWV3LmhpZ2hsaWdodCBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoNDklKSBzZXBpYSg1OCUpIHNhdHVyYXRlKDkwNCUpIGh1ZS1yb3RhdGUoMTY2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDgzJSkgY29udHJhc3QoOTklKTtcXG59XFxuXFxuLmNvbXBsZXRlIGltZyxcXG4uaW1wb3J0YW50IGltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNvbXBsZXRlIGltZzpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCg4MSUpIHNlcGlhKDM3JSkgc2F0dXJhdGUoNDM1JSkgaHVlLXJvdGF0ZSg2NmRlZylcXG4gICAgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDg2JSk7XFxufVxcblxcbi5jb21wbGV0ZS5oaWdobGlnaHQgaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDQyJSkgc2VwaWEoMzklKSBzYXR1cmF0ZSg1NjglKSBodWUtcm90YXRlKDcxZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDg5JSk7XFxufVxcblxcbi5pbXBvcnRhbnQgaW1nOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDc1JSkgc2VwaWEoNjIlKSBzYXR1cmF0ZSgyMzUzJSkgaHVlLXJvdGF0ZSgzMDdkZWcpXFxuICAgIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg3MiUpO1xcbn1cXG5cXG4uaW1wb3J0YW50LmhpZ2hsaWdodCBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTMlKSBzZXBpYSg4NyUpIHNhdHVyYXRlKDMwNTklKSBodWUtcm90YXRlKDM0OGRlZylcXG4gICAgYnJpZ2h0bmVzcygxMTUlKSBjb250cmFzdCg4NCUpO1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnQgLnRpdGxlIC5kZWxldGUsXFxuLmZvcm0tY29udCAuZGVsZXRlIHtcXG4gIHRvcDogLTE1cHg7XFxuICByaWdodDogLTEwcHg7XFxufVxcblxcbi50b2RvLWJ0bnMgLmRlbGV0ZSB7XFxuICB0b3A6IC0yOHB4O1xcbiAgcmlnaHQ6IC0yNnB4O1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiAjNzYwMDAwO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QsXFxuLmNyZWF0ZS10b2RvIHtcXG4gIHBhZGRpbmc6IDhweCAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjZTBlMWRkO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3OGJkMztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjYTdlOTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODhhNDg7XFxufVxcblxcbi5jcmVhdGUtdG9kbzphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3YTU1NztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tY29udCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjUlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXG59XFxuXFxuLmZvcm0tY29udCBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbmZvcm0gZGl2Om5vdCg6bnRoLW9mLXR5cGUoNCkpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxubGFiZWw6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZzogNnB4IDZweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IHNvbGlkIDJweCAjMTc4YmQzO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5mb3JtIC5jcmVhdGUtdG9kbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmZvcm0gLmNyZWF0ZS1wcm9qZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRTtpQkFDZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFO2lDQUMrQjtBQUNqQzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0U7aUNBQytCO0FBQ2pDOztBQUVBO0VBQ0U7a0NBQ2dDO0FBQ2xDOztBQUVBO0VBQ0U7aUNBQytCO0FBQ2pDOztBQUVBO0VBQ0U7a0NBQ2dDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMEJBQTBCOztFQUUxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNhcmFidW46d2dodEA2MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6ICdTYXJhYnVuJywgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xcbn1cXG5cXG4jcGFnZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA0ZnI7XFxufVxcblxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggOHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0byBhdXRvO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XFxufVxcblxcbm5hdixcXG5tYWluIHtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbmxpLFxcbmgxLFxcbmxhYmVsIHtcXG4gIGNvbG9yOiAjZTBlMWRkO1xcbn1cXG5cXG4ucHJvamVjdC1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1jb250IC50aXRsZSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnQgLnRpdGxlLmN1cnJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRvZG9zLWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbn1cXG5cXG4udG9kby1jYXJkIC50aXRsZSB7XFxuICBmb250LXNpemU6IDEuNDVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9kby1jYXJkIC50aXRsZS5jb21wbGV0ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbn1cXG5cXG4uZGVzYyxcXG4uZGF0ZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmRlc2Mge1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuXFxuLmRhdGUge1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuXFxuLnRvZG8tYnRucyxcXG4ucHJvamVjdC1jb250IC50aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWNvbnQgLnRpdGxlIGJ1dHRvbixcXG4udG9kby1idG5zIGJ1dHRvbixcXG4uZm9ybS1jb250IC5kZWxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi50b2RvLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbn1cXG5cXG4udmlldyBpbWcsXFxuLmNvbXBsZXRlIGltZyxcXG4uaW1wb3J0YW50IGltZyB7XFxuICBmaWx0ZXI6IGludmVydCg3MiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzNSUpIGh1ZS1yb3RhdGUoMTQ1ZGVnKSBicmlnaHRuZXNzKDg5JSlcXG4gICAgY29udHJhc3QoODklKTtcXG59XFxuLnZpZXcgaW1nIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4udmlldyBpbWc6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoNjclKSBzZXBpYSg2MSUpIHNhdHVyYXRlKDM5MCUpIGh1ZS1yb3RhdGUoMTc4ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG5cXG4udmlldy5oaWdobGlnaHQgaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ5JSkgc2VwaWEoNTglKSBzYXR1cmF0ZSg5MDQlKSBodWUtcm90YXRlKDE2NmRlZylcXG4gICAgYnJpZ2h0bmVzcyg4MyUpIGNvbnRyYXN0KDk5JSk7XFxufVxcblxcbi5jb21wbGV0ZSBpbWcsXFxuLmltcG9ydGFudCBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb21wbGV0ZSBpbWc6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoODElKSBzZXBpYSgzNyUpIHNhdHVyYXRlKDQzNSUpIGh1ZS1yb3RhdGUoNjZkZWcpXFxuICAgIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg4NiUpO1xcbn1cXG5cXG4uY29tcGxldGUuaGlnaGxpZ2h0IGltZyB7XFxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoNTY4JSkgaHVlLXJvdGF0ZSg3MWRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg4OSUpO1xcbn1cXG5cXG4uaW1wb3J0YW50IGltZzpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCg3NSUpIHNlcGlhKDYyJSkgc2F0dXJhdGUoMjM1MyUpIGh1ZS1yb3RhdGUoMzA3ZGVnKVxcbiAgICBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoNzIlKTtcXG59XFxuXFxuLmltcG9ydGFudC5oaWdobGlnaHQgaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEzJSkgc2VwaWEoODclKSBzYXR1cmF0ZSgzMDU5JSkgaHVlLXJvdGF0ZSgzNDhkZWcpXFxuICAgIGJyaWdodG5lc3MoMTE1JSkgY29udHJhc3QoODQlKTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBjb2xvcjogI2EwYTBhMDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5kZWxldGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250IC50aXRsZSAuZGVsZXRlLFxcbi5mb3JtLWNvbnQgLmRlbGV0ZSB7XFxuICB0b3A6IC0xNXB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4udG9kby1idG5zIC5kZWxldGUge1xcbiAgdG9wOiAtMjhweDtcXG4gIHJpZ2h0OiAtMjZweDtcXG59XFxuXFxuLmRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogIzc2MDAwMDtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LFxcbi5jcmVhdGUtdG9kbyB7XFxuICBwYWRkaW5nOiA4cHggMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogI2UwZTFkZDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzhiZDM7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzY2E3ZTk7XFxufVxcblxcbi5jcmVhdGUtdG9kbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg4YTQ4O1xcbn1cXG5cXG4uY3JlYXRlLXRvZG86YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1N2E1NTc7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJsdXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI1JTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxufVxcblxcbi5mb3JtLWNvbnQgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG5mb3JtIGRpdjpub3QoOm50aC1vZi10eXBlKDQpKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbmxhYmVsOmxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDZweCA2cHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBzb2xpZCAycHggIzE3OGJkMztcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuZm9ybSAuY3JlYXRlLXRvZG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5mb3JtIC5jcmVhdGUtcHJvamVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc29sZS5sb2coJ2hlbGxvb29vIHdlYnBhY2sgc2VydmVyIScpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9