(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"!isBrowser\">\r\n      <ion-button id=\"back\" (click)=\"alertExit()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"isBrowser\" style=\"margin-left: 50px\">Tic-Tac-Toe</ion-title>\r\n    <ion-title *ngIf=\"!isBrowser\">Tic-Tac-Toe</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"theme\" (click)=\"setTheme(false)\">\r\n        <ion-icon name=\"contrast-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"restartGame($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div id=\"container\">\r\n    <ion-button (click)=\"move('00')\" id=\"00\" fill=\"outline\"></ion-button>\r\n    <ion-button (click)=\"move('01')\" id=\"01\" fill=\"outline\"></ion-button>\r\n    <ion-button (click)=\"move('02')\" id=\"02\" fill=\"outline\"></ion-button>\r\n    <br>\r\n    <ion-button (click)=\"move('10')\" id=\"10\" fill=\"outline\"></ion-button>\r\n    <ion-button (click)=\"move('11')\" id=\"11\" fill=\"outline\"></ion-button>\r\n    <ion-button (click)=\"move('12')\" id=\"12\" fill=\"outline\"></ion-button>\r\n    <br>\r\n    <ion-button (click)=\"move('20')\" id=\"20\" fill=\"outline\"></ion-button>\r\n    <ion-button (click)=\"move('21')\" id=\"21\" fill=\"outline\"></ion-button>\r\n    <ion-button (click)=\"move('22')\" id=\"22\" fill=\"outline\"></ion-button>\r\n  </div>\r\n  <div id=\"labels\">\r\n    <ion-row class=\"ion-no-padding ion-no-margin\">\r\n      <ion-col class=\"ion-no-padding ion-no-margin\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Mode</ion-card-subtitle>\r\n            <ion-card-title id=\"mode-label\">1P</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col class=\"ion-no-padding ion-no-margin\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>X</ion-card-subtitle>\r\n            <ion-card-title id=\"score-x-label\">0</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col class=\"ion-no-padding ion-no-margin\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>O</ion-card-subtitle>\r\n            <ion-card-title id=\"score-o-label\">0</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col class=\"ion-no-padding ion-no-margin\">\r\n        <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Draws</ion-card-subtitle>\r\n          <ion-card-title id=\"score-t-label\">0</ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </ion-col>\r\n      <ion-col class=\"ion-no-padding ion-no-margin\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Next</ion-card-subtitle>\r\n            <ion-card-title id=\"next-label\">-</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-row>\r\n    <ion-col class=\"ion-no-padding\">\r\n      <ion-button expand=\"full\" class=\"ion-no-margin\" (click)=\"changeMode()\" id=\"change-mode\">Change Mode</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"ion-no-padding\">\r\n      <ion-button expand=\"full\" class=\"ion-no-margin\" (click)=\"startGame()\" id=\"start-game\">Start</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-header {\n  height: 55px;\n}\n\nion-title, ion-content {\n  text-align: center;\n}\n\nion-content ion-button {\n  width: 80px;\n  height: 80px;\n  text-align: center;\n  font-size: 25px;\n  font-weight: bold;\n  margin: -3px -5px 0 0;\n  --border-radius: 0;\n}\n\n[id=\"00\"] {\n  --border-width: 0px 5px 5px 0px;\n}\n\n[id=\"10\"] {\n  --border-width: 0px 5px 5px 0;\n}\n\n[id=\"20\"] {\n  --border-width: 0px 5px 0 0;\n}\n\n[id=\"01\"] {\n  --border-width: 0px 5px 5px 0;\n}\n\n[id=\"11\"] {\n  --border-width: 0px 5px 5px 0;\n}\n\n[id=\"21\"] {\n  --border-width: 0px 5px 0 0;\n}\n\n[id=\"02\"] {\n  --border-width: 0px 0px 5px 0;\n}\n\n[id=\"12\"] {\n  --border-width: 0px 0px 5px 0;\n}\n\n[id=\"22\"] {\n  --border-width: 0px 0px 0 0;\n}\n\n#labels {\n  position: absolute;\n  bottom: 10%;\n  width: 100%;\n}\n\n#labels ion-card {\n  margin: 2px;\n  padding: 0 !important;\n}\n\n#labels ion-card ion-card-header {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-footer {\n  height: 55px;\n}\n\nion-footer ion-button {\n  height: 55px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUFFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBREk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBR047O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGhlaWdodDogNTVweDtcbn1cblxuaW9uLXRpdGxlLCBpb24tY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAtM3B4IC01cHggMCAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG59XG5cbltpZD1cIjAwXCJdIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCA1cHggNXB4IDBweDtcbn1cblxuW2lkPVwiMTBcIl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4IDVweCA1cHggMDtcbn1cblxuW2lkPVwiMjBcIl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4IDVweCAwIDA7XG59XG5cbltpZD1cIjAxXCJdIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCA1cHggNXB4IDA7XG59XG5cbltpZD1cIjExXCJdIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCA1cHggNXB4IDA7XG59XG5cbltpZD1cIjIxXCJdIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCA1cHggMCAwO1xufVxuXG5baWQ9XCIwMlwiXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDVweCAwO1xufVxuXG5baWQ9XCIxMlwiXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDVweCAwO1xufVxuXG5baWQ9XCIyMlwiXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDAgMDtcbn1cblxuI2xhYmVscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIGhlaWdodDogNTVweDtcbn1cblxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





let HomePage = class HomePage {
    constructor(platform, alertController, renderer, storage) {
        this.platform = platform;
        this.alertController = alertController;
        this.renderer = renderer;
        this.storage = storage;
        this.data = [['', '', ''],
            ['', '', ''],
            ['', '', '']];
        this.mode = '1P';
        this.human = true;
        this.gameOver = false;
        this.scores = { X: -1, O: 1, T: 0 };
        this.scoreX = 0;
        this.scoreO = 0;
        this.scoreT = 0;
        this.theme = 'dark';
        this.setTheme(true);
        this.isBrowser = this.platform.is('desktop') || this.platform.is('mobileweb');
    }
    // noinspection JSUnusedGlobalSymbols
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.alertExit();
        }));
        this.setTheme(true);
    }
    // noinspection JSUnusedGlobalSymbols
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    move(id) {
        if (document.getElementById('start-game').innerHTML === 'Start') {
            document.getElementById('start-game').innerHTML = 'Restart Game';
        }
        if (this.gameOver) {
            return;
        }
        if (this.human) {
            if (document.getElementById(id).innerHTML === '') {
                document.getElementById(id).innerHTML = 'X';
                if (this.mode === '2P') {
                    document.getElementById('next-label').innerHTML = 'O';
                }
                this.data[Number(id.substr(0, 1))][Number(id.substr(1, 2))] = 'X';
                this.human = false;
                this.winner('check');
                if (this.gameOver) {
                    return;
                }
            }
        }
        else if (!this.human) {
            if (this.mode === '2P') {
                if (document.getElementById(id).innerHTML === '') {
                    document.getElementById(id).innerHTML = 'O';
                    document.getElementById('next-label').innerHTML = 'X';
                    this.data[Number(id.substr(0, 1))][Number(id.substr(1, 2))] = 'O';
                    this.human = true;
                }
            }
        }
        if (this.mode === '1P') {
            if (!this.human) {
                this.aiTurn();
                this.human = true;
            }
        }
        this.winner('check');
        if (this.gameOver) {
            return;
        }
    }
    startGame() {
        if (document.getElementById('start-game').innerHTML === 'Start') {
            document.getElementById('start-game').innerHTML = 'Restart Game';
            this.aiTurn();
        }
        else if (document.getElementById('start-game').innerHTML === 'Restart Game') {
            this.restartGame();
        }
    }
    aiTurn() {
        let bestScore = -Infinity;
        let bestMove;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (this.data[x][y] === '') {
                    this.data[x][y] = 'O';
                    let score = this.minimax(false);
                    this.data[x][y] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = { x, y };
                    }
                }
            }
        }
        this.data[bestMove.x][bestMove.y] = 'O';
        document.getElementById(String(bestMove.x) + String(bestMove.y)).innerHTML = 'O';
    }
    minimax(isMaximizing, alpha = -Infinity, beta = Infinity) {
        let result = this.winner('minimax');
        if (result !== null) {
            return this.scores[result];
        }
        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    if (this.data[x][y] === '') {
                        this.data[x][y] = 'O';
                        let score = this.minimax(false, alpha, beta);
                        this.data[x][y] = '';
                        bestScore = Math.max(score, bestScore);
                        alpha = Math.max(alpha, score);
                        if (beta <= alpha) {
                            break;
                        }
                    }
                }
            }
            return bestScore;
        }
        else {
            let bestScore = Infinity;
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    if (this.data[x][y] === '') {
                        this.data[x][y] = 'X';
                        let score = this.minimax(true, alpha, beta);
                        this.data[x][y] = '';
                        bestScore = Math.min(score, bestScore);
                        beta = Math.min(beta, score);
                        if (beta <= alpha) {
                            break;
                        }
                    }
                }
            }
            return bestScore;
        }
    }
    winner(mode) {
        let player;
        let availableSpots = 0;
        if (mode === 'minimax') {
            player = 'X';
            if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2] && this.data[0][2] === player ||
                this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2] && this.data[1][2] === player ||
                this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2] && this.data[2][2] === player ||
                this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0] && this.data[2][0] === player ||
                this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1] && this.data[2][1] === player ||
                this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2] && this.data[2][2] === player ||
                this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2] && this.data[2][2] === player ||
                this.data[2][0] === this.data[1][1] && this.data[1][1] === this.data[0][2] && this.data[0][2] === player) {
                return 'X';
            }
            player = 'O';
            if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2] && this.data[0][2] === player ||
                this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2] && this.data[1][2] === player ||
                this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2] && this.data[2][2] === player ||
                this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0] && this.data[2][0] === player ||
                this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1] && this.data[2][1] === player ||
                this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2] && this.data[2][2] === player ||
                this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2] && this.data[2][2] === player ||
                this.data[2][0] === this.data[1][1] && this.data[1][1] === this.data[0][2] && this.data[0][2] === player) {
                return 'O';
            }
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    if (this.data[x][y] === '') {
                        availableSpots++;
                    }
                }
            }
            if (availableSpots === 0) {
                return 'T';
            }
            return null;
        }
        else if (mode === 'check') {
            player = 'X';
            if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2] && this.data[0][2] === player ||
                this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2] && this.data[1][2] === player ||
                this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2] && this.data[2][2] === player ||
                this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0] && this.data[2][0] === player ||
                this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1] && this.data[2][1] === player ||
                this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2] && this.data[2][2] === player ||
                this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2] && this.data[2][2] === player ||
                this.data[2][0] === this.data[1][1] && this.data[1][1] === this.data[0][2] && this.data[0][2] === player) {
                // noinspection JSIgnoredPromiseFromCall
                this.alertX();
                this.scoreX += 1;
                document.getElementById('score-x-label').innerHTML = String(this.scoreX);
                document.getElementById('next-label').innerHTML = '-';
                this.gameOver = true;
                return;
            }
            player = 'O';
            if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2] && this.data[0][2] === player ||
                this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2] && this.data[1][2] === player ||
                this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2] && this.data[2][2] === player ||
                this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0] && this.data[2][0] === player ||
                this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1] && this.data[2][1] === player ||
                this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2] && this.data[2][2] === player ||
                this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2] && this.data[2][2] === player ||
                this.data[2][0] === this.data[1][1] && this.data[1][1] === this.data[0][2] && this.data[0][2] === player) {
                // noinspection JSIgnoredPromiseFromCall
                this.alertO();
                this.scoreO += 1;
                document.getElementById('score-o-label').innerHTML = String(this.scoreO);
                document.getElementById('next-label').innerHTML = '-';
                this.gameOver = true;
                return;
            }
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    if (this.data[x][y] === '') {
                        availableSpots++;
                    }
                }
            }
            if (availableSpots === 0) {
                // noinspection JSIgnoredPromiseFromCall
                this.alertT();
                this.scoreT += 1;
                document.getElementById('score-t-label').innerHTML = String(this.scoreT);
                document.getElementById('next-label').innerHTML = '-';
                this.gameOver = true;
                return;
            }
        }
    }
    restartGame(event = null) {
        this.data = [['', '', ''],
            ['', '', ''],
            ['', '', '']];
        this.human = true;
        this.gameOver = false;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                document.getElementById(String(x) + String(y)).innerHTML = '';
            }
        }
        if (this.mode === '1P') {
            document.getElementById('start-game').innerHTML = 'Start';
            document.getElementById('next-label').innerHTML = '-';
        }
        else {
            document.getElementById('start-game').innerHTML = 'Restart Game';
            document.getElementById('next-label').innerHTML = 'X';
        }
        if (event !== null) {
            this.resetScores();
            setTimeout(() => {
                event.target.complete();
            }, 250);
        }
    }
    resetScores() {
        this.scoreX = 0;
        this.scoreO = 0;
        this.scoreT = 0;
        document.getElementById('score-x-label').innerHTML = String(this.scoreX);
        document.getElementById('score-o-label').innerHTML = String(this.scoreO);
        document.getElementById('score-t-label').innerHTML = String(this.scoreT);
    }
    changeMode() {
        if (document.getElementById('mode-label').innerHTML === '1P') {
            this.mode = '2P';
            document.getElementById('mode-label').innerHTML = '2P';
            document.getElementById('next-label').innerHTML = 'X';
        }
        else {
            this.mode = '1P';
            document.getElementById('mode-label').innerHTML = '1P';
            document.getElementById('next-label').innerHTML = '-';
        }
        this.restartGame();
        this.resetScores();
    }
    setTheme(init, set = null) {
        if (init) {
            this.storage.get('theme').then((result) => {
                if (result != null) {
                    this.theme = result;
                    this.setTheme(false, result);
                }
                else {
                    this.setTheme(false, 'dark');
                }
            });
        }
        else if (set === 'dark') {
            this.renderer.setAttribute(document.body, 'color-theme', 'dark');
            this.theme = 'dark';
            // noinspection JSIgnoredPromiseFromCall
            this.storage.set('theme', 'dark');
        }
        else if (set === 'light') {
            this.renderer.setAttribute(document.body, 'color-theme', 'light');
            this.theme = 'light';
            // noinspection JSIgnoredPromiseFromCall
            this.storage.set('theme', 'light');
        }
        else if (this.theme === 'light') {
            this.renderer.setAttribute(document.body, 'color-theme', 'dark');
            this.theme = 'dark';
            // noinspection JSIgnoredPromiseFromCall
            this.storage.set('theme', 'dark');
        }
        else if (this.theme === 'dark') {
            this.renderer.setAttribute(document.body, 'color-theme', 'light');
            this.theme = 'light';
            // noinspection JSIgnoredPromiseFromCall
            this.storage.set('theme', 'light');
        }
    }
    alertT() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-game-over',
                header: 'Game Over',
                message: 'Draw',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    alertO() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message;
            if (this.mode === '1P') {
                message = 'You Lost';
            }
            else {
                message = 'O Won';
            }
            const alert = yield this.alertController.create({
                cssClass: 'alert-game-over',
                header: 'Game Over',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    alertX() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message;
            if (this.mode === '1P') {
                message = 'You Won';
            }
            else {
                message = 'X Won';
            }
            const alert = yield this.alertController.create({
                cssClass: 'alert-game-over',
                header: 'Game Over',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    alertExit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-exit',
                header: 'Exit Game',
                message: 'Are you sure you want to exit the game ?',
                buttons: [
                    {
                        text: 'YES',
                        handler: () => {
                            navigator['app'].exitApp();
                        }
                    }, {
                        text: 'NO',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map