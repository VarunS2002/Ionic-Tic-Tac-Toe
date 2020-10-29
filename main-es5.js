(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"showCSSSplash && darkSplash\" class=\"splash\" style=\"background: #121212;\">\r\n  <div class=\"sk-cube-grid\">\r\n    <div class=\"sk-cube sk-cube1\"></div>\r\n    <div class=\"sk-cube sk-cube2\"></div>\r\n    <div class=\"sk-cube sk-cube3\"></div>\r\n    <div class=\"sk-cube sk-cube4\"></div>\r\n    <div class=\"sk-cube sk-cube5\"></div>\r\n    <div class=\"sk-cube sk-cube6\"></div>\r\n    <div class=\"sk-cube sk-cube7\"></div>\r\n    <div class=\"sk-cube sk-cube8\"></div>\r\n    <div class=\"sk-cube sk-cube9\"></div>\r\n  </div>\r\n  <div class=\"name\" style=\"color: grey\">VarunS2002</div>\r\n</div>\r\n<div *ngIf=\"showCSSSplash && !darkSplash\" class=\"splash\" style=\"background: #FFFFFF;\">\r\n  <div class=\"sk-cube-grid\">\r\n    <div class=\"sk-cube sk-cube1\"></div>\r\n    <div class=\"sk-cube sk-cube2\"></div>\r\n    <div class=\"sk-cube sk-cube3\"></div>\r\n    <div class=\"sk-cube sk-cube4\"></div>\r\n    <div class=\"sk-cube sk-cube5\"></div>\r\n    <div class=\"sk-cube sk-cube6\"></div>\r\n    <div class=\"sk-cube sk-cube7\"></div>\r\n    <div class=\"sk-cube sk-cube8\"></div>\r\n    <div class=\"sk-cube sk-cube9\"></div>\r\n  </div>\r\n  <div class=\"name\" style=\"color: #121212\">VarunS2002</div>\r\n</div>\r\n<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".splash {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.name {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  bottom: 0;\n  text-align: center;\n  -webkit-animation: pulse 2200ms linear forwards;\n          animation: pulse 2200ms linear forwards;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.sk-cube-grid {\n  width: 40px;\n  height: 40px;\n  margin: 100px auto;\n}\n\n.sk-cube-grid .sk-cube {\n  width: 33%;\n  height: 33%;\n  background-color: #3880ff;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n\n.sk-cube-grid .sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.sk-cube-grid .sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube7 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\n.sk-cube-grid .sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtBQUNGOztBQVZBO0VBQ0U7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUNBO0lBQ0UsVUFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtFQUFBO0VBQ0EsMERBQUE7QUFBRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFGQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFKQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUFPRjs7QUFOQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUFTRjs7QUFSQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUFXRjs7QUFWQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFhRjs7QUFaQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUFlRjs7QUFkQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUFpQkY7O0FBZkE7RUFDRTtJQUVFLDJCQUFBO0VBa0JGO0VBakJFO0lBRUUsMkJBQUE7RUFtQko7QUFDRjs7QUFoQkE7RUFDRTtJQUVFLDJCQUFBO0VBa0JGO0VBakJFO0lBRUUsMkJBQUE7RUFtQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxhc2gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIGJvdHRvbTowO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbmltYXRpb246IHB1bHNlIDIyMDBtcyBsaW5lYXIgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2stY3ViZS1ncmlkIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG59XHJcblxyXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlIHtcclxuICB3aWR0aDogMzMlO1xyXG4gIGhlaWdodDogMzMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxyXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlMiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XHJcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cclxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxyXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlNSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XHJcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cclxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDBzOyB9XHJcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU4IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cclxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XHJcbiAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICB9IDM1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAwJSwgNzAlLCAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gIH0gMzUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, storage) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.storage = storage;
          this.showCSSSplash = true;
          this.storage.get('theme').then(function (result) {
            _this.darkSplash = result !== 'light';
          });
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();

              Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(2200).subscribe(function () {
                return _this2.showCSSSplash = false;
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Users\VARUN\Desktop\My Files\Development\Ionic-Tic-Tac-Toe\tic-tac-toe\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map