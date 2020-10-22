!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(a,i,n){"use strict";n.r(i),n.d(i,"HomePageModule",(function(){return k}));var r=n("ofXK"),s=n("TEn/"),o=n("3Pt+"),h=n("tyNb"),d=n("mrSG"),c=n("fXoL"),u=n("e8h1");function l(t,e){if(1&t){var a=c.Lb();c.Kb(0,"ion-buttons",22),c.Kb(1,"ion-button",23),c.Sb("click",(function(){return c.Zb(a),c.Ub().alertExit()})),c.Ib(2,"ion-icon",24),c.Jb(),c.Jb()}}function m(t,e){1&t&&(c.Kb(0,"ion-title",25),c.dc(1,"Tic-Tac-Toe"),c.Jb())}function b(t,e){1&t&&(c.Kb(0,"ion-title"),c.dc(1,"Tic-Tac-Toe"),c.Jb())}var f,g,v,p=[{path:"",component:(f=function(){function a(e,i,n,r){t(this,a),this.platform=e,this.alertController=i,this.renderer=n,this.storage=r,this.data=[["","",""],["","",""],["","",""]],this.mode="PvC",this.human=!0,this.gameOver=!1,this.scores={X:-1,O:1,T:0},this.theme="dark",this.setTheme(!0),this.isBrowser=this.platform.is("desktop")||this.platform.is("mobileweb")}var i,n,r;return i=a,(n=[{key:"ionViewDidEnter",value:function(){var t=this;this.subscription=this.platform.backButton.subscribe((function(){return Object(d.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertExit();case 2:case"end":return t.stop()}}),t,this)})))})),this.setTheme(!0)}},{key:"ionViewWillLeave",value:function(){this.subscription.unsubscribe()}},{key:"move",value:function(t){if("Start"===document.getElementById("startGame").innerHTML&&(document.getElementById("startGame").innerHTML="Restart Game"),!this.gameOver){if(this.human){if(""===document.getElementById(t).innerHTML&&(document.getElementById(t).innerHTML="X",this.data[Number(t.substr(0,1))][Number(t.substr(1,2))]="X",this.human=!1,this.winner("check"),this.gameOver))return}else this.human||"PvP"===this.mode&&""===document.getElementById(t).innerHTML&&(document.getElementById(t).innerHTML="O",this.data[Number(t.substr(0,1))][Number(t.substr(1,2))]="O",this.human=!0);"PvC"===this.mode&&(this.human||(this.aiTurn(),this.human=!0)),this.winner("check")}}},{key:"startGame",value:function(){"Start"===document.getElementById("startGame").innerHTML?(document.getElementById("startGame").innerHTML="Restart Game",this.aiTurn()):"Restart Game"===document.getElementById("startGame").innerHTML&&this.restartGame()}},{key:"aiTurn",value:function(){for(var t,e=-1/0,a=0;a<3;a++)for(var i=0;i<3;i++)if(""===this.data[a][i]){this.data[a][i]="O";var n=this.minimax(!1);this.data[a][i]="",n>e&&(e=n,t={x:a,y:i})}this.data[t.x][t.y]="O",document.getElementById(String(t.x)+String(t.y)).innerHTML="O"}},{key:"minimax",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1/0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,i=this.winner("minimax");if(null!==i)return this.scores[i];if(t){for(var n=-1/0,r=0;r<3;r++)for(var s=0;s<3;s++)if(""===this.data[r][s]){this.data[r][s]="O";var o=this.minimax(!1,e,a);if(this.data[r][s]="",n=Math.max(o,n),a<=(e=Math.max(e,o)))break}return n}for(var h=1/0,d=0;d<3;d++)for(var c=0;c<3;c++)if(""===this.data[d][c]){this.data[d][c]="X";var u=this.minimax(!0,e,a);if(this.data[d][c]="",h=Math.min(u,h),(a=Math.min(a,u))<=e)break}return h}},{key:"winner",value:function(t){var e,a=0;if("minimax"===t){if(e="X",this.data[0][0]===this.data[0][1]&&this.data[0][1]===this.data[0][2]&&this.data[0][2]===e||this.data[1][0]===this.data[1][1]&&this.data[1][1]===this.data[1][2]&&this.data[1][2]===e||this.data[2][0]===this.data[2][1]&&this.data[2][1]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][0]&&this.data[1][0]===this.data[2][0]&&this.data[2][0]===e||this.data[0][1]===this.data[1][1]&&this.data[1][1]===this.data[2][1]&&this.data[2][1]===e||this.data[0][2]===this.data[1][2]&&this.data[1][2]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][1]&&this.data[1][1]===this.data[2][2]&&this.data[2][2]===e||this.data[2][0]===this.data[1][1]&&this.data[1][1]===this.data[0][2]&&this.data[0][2]===e)return"X";if(e="O",this.data[0][0]===this.data[0][1]&&this.data[0][1]===this.data[0][2]&&this.data[0][2]===e||this.data[1][0]===this.data[1][1]&&this.data[1][1]===this.data[1][2]&&this.data[1][2]===e||this.data[2][0]===this.data[2][1]&&this.data[2][1]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][0]&&this.data[1][0]===this.data[2][0]&&this.data[2][0]===e||this.data[0][1]===this.data[1][1]&&this.data[1][1]===this.data[2][1]&&this.data[2][1]===e||this.data[0][2]===this.data[1][2]&&this.data[1][2]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][1]&&this.data[1][1]===this.data[2][2]&&this.data[2][2]===e||this.data[2][0]===this.data[1][1]&&this.data[1][1]===this.data[0][2]&&this.data[0][2]===e)return"O";for(var i=0;i<3;i++)for(var n=0;n<3;n++)""===this.data[i][n]&&a++;return 0===a?"T":null}if("check"===t){if(e="X",this.data[0][0]===this.data[0][1]&&this.data[0][1]===this.data[0][2]&&this.data[0][2]===e||this.data[1][0]===this.data[1][1]&&this.data[1][1]===this.data[1][2]&&this.data[1][2]===e||this.data[2][0]===this.data[2][1]&&this.data[2][1]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][0]&&this.data[1][0]===this.data[2][0]&&this.data[2][0]===e||this.data[0][1]===this.data[1][1]&&this.data[1][1]===this.data[2][1]&&this.data[2][1]===e||this.data[0][2]===this.data[1][2]&&this.data[1][2]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][1]&&this.data[1][1]===this.data[2][2]&&this.data[2][2]===e||this.data[2][0]===this.data[1][1]&&this.data[1][1]===this.data[0][2]&&this.data[0][2]===e)return this.alertX(),void(this.gameOver=!0);if(e="O",this.data[0][0]===this.data[0][1]&&this.data[0][1]===this.data[0][2]&&this.data[0][2]===e||this.data[1][0]===this.data[1][1]&&this.data[1][1]===this.data[1][2]&&this.data[1][2]===e||this.data[2][0]===this.data[2][1]&&this.data[2][1]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][0]&&this.data[1][0]===this.data[2][0]&&this.data[2][0]===e||this.data[0][1]===this.data[1][1]&&this.data[1][1]===this.data[2][1]&&this.data[2][1]===e||this.data[0][2]===this.data[1][2]&&this.data[1][2]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][1]&&this.data[1][1]===this.data[2][2]&&this.data[2][2]===e||this.data[2][0]===this.data[1][1]&&this.data[1][1]===this.data[0][2]&&this.data[0][2]===e)return this.alertO(),void(this.gameOver=!0);for(var r=0;r<3;r++)for(var s=0;s<3;s++)""===this.data[r][s]&&a++;if(0===a)return this.alertT(),void(this.gameOver=!0)}}},{key:"restartGame",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.data=[["","",""],["","",""],["","",""]],this.human=!0,this.gameOver=!1;for(var e=0;e<3;e++)for(var a=0;a<3;a++)document.getElementById(String(e)+String(a)).innerHTML="";document.getElementById("startGame").innerHTML="PvC"===this.mode?"Start":"Restart Game",null!==t&&setTimeout((function(){t.target.complete()}),250)}},{key:"changeMode",value:function(){"PvC"===document.getElementById("mode").innerHTML?(this.mode="PvP",document.getElementById("mode").innerHTML="PvP"):(this.mode="PvC",document.getElementById("mode").innerHTML="PvC"),this.restartGame()}},{key:"setTheme",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t?this.storage.get("theme").then((function(t){null!=t?(e.theme=t,e.setTheme(!1,t)):e.setTheme(!1,"dark")})):"dark"===a?(this.renderer.setAttribute(document.body,"color-theme","dark"),this.theme="dark",this.storage.set("theme","dark")):"light"===a?(this.renderer.setAttribute(document.body,"color-theme","light"),this.theme="light",this.storage.set("theme","light")):"light"===this.theme?(this.renderer.setAttribute(document.body,"color-theme","dark"),this.theme="dark",this.storage.set("theme","dark")):"dark"===this.theme&&(this.renderer.setAttribute(document.body,"color-theme","light"),this.theme="light",this.storage.set("theme","light"))}},{key:"alertT",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"alert-game-over",header:"Game Over",message:"Draw",buttons:["OK"]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"alertO",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="PvC"===this.mode?"You Lost":"O Won",t.next=3,this.alertController.create({cssClass:"alert-game-over",header:"Game Over",message:e,buttons:["OK"]});case 3:return a=t.sent,t.next=6,a.present();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"alertX",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="PvC"===this.mode?"You Won":"X Won",t.next=3,this.alertController.create({cssClass:"alert-game-over",header:"Game Over",message:e,buttons:["OK"]});case 3:return a=t.sent,t.next=6,a.present();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"alertExit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"alert-exit",header:"Exit Game",message:"Are you sure you want to exit the game ?",buttons:[{text:"YES",handler:function(){navigator.app.exitApp()}},{text:"NO",role:"cancel"}]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}}])&&e(i.prototype,n),r&&e(i,r),a}(),f.\u0275fac=function(t){return new(t||f)(c.Hb(s.r),c.Hb(s.a),c.Hb(c.D),c.Hb(u.b))},f.\u0275cmp=c.Bb({type:f,selectors:[["app-home"]],decls:31,vars:5,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["style","margin-left: 50px",4,"ngIf"],[4,"ngIf"],["slot","end"],["id","theme",3,"click"],["name","contrast-outline"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["id","container"],["id","00","fill","outline",3,"click"],["id","01","fill","outline",3,"click"],["id","02","fill","outline",3,"click"],["id","10","fill","outline",3,"click"],["id","11","fill","outline",3,"click"],["id","12","fill","outline",3,"click"],["id","20","fill","outline",3,"click"],["id","21","fill","outline",3,"click"],["id","22","fill","outline",3,"click"],[1,"ion-no-padding"],["expand","full","id","mode",1,"ion-no-margin",3,"click"],["expand","full","id","startGame",1,"ion-no-margin",3,"click"],["slot","start"],["id","back",3,"click"],["name","arrow-back"],[2,"margin-left","50px"]],template:function(t,e){1&t&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar"),c.cc(2,l,3,0,"ion-buttons",1),c.cc(3,m,2,0,"ion-title",2),c.cc(4,b,2,0,"ion-title",3),c.Kb(5,"ion-buttons",4),c.Kb(6,"ion-button",5),c.Sb("click",(function(){return e.setTheme(!1)})),c.Ib(7,"ion-icon",6),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(8,"ion-content",7),c.Kb(9,"ion-refresher",8),c.Sb("ionRefresh",(function(t){return e.restartGame(t)})),c.Ib(10,"ion-refresher-content"),c.Jb(),c.Kb(11,"div",9),c.Kb(12,"ion-button",10),c.Sb("click",(function(){return e.move("00")})),c.Jb(),c.Kb(13,"ion-button",11),c.Sb("click",(function(){return e.move("01")})),c.Jb(),c.Kb(14,"ion-button",12),c.Sb("click",(function(){return e.move("02")})),c.Jb(),c.Ib(15,"br"),c.Kb(16,"ion-button",13),c.Sb("click",(function(){return e.move("10")})),c.Jb(),c.Kb(17,"ion-button",14),c.Sb("click",(function(){return e.move("11")})),c.Jb(),c.Kb(18,"ion-button",15),c.Sb("click",(function(){return e.move("12")})),c.Jb(),c.Ib(19,"br"),c.Kb(20,"ion-button",16),c.Sb("click",(function(){return e.move("20")})),c.Jb(),c.Kb(21,"ion-button",17),c.Sb("click",(function(){return e.move("21")})),c.Jb(),c.Kb(22,"ion-button",18),c.Sb("click",(function(){return e.move("22")})),c.Jb(),c.Jb(),c.Jb(),c.Kb(23,"ion-footer"),c.Kb(24,"ion-row"),c.Kb(25,"ion-col",19),c.Kb(26,"ion-button",20),c.Sb("click",(function(){return e.changeMode()})),c.dc(27,"PvC"),c.Jb(),c.Jb(),c.Kb(28,"ion-col",19),c.Kb(29,"ion-button",21),c.Sb("click",(function(){return e.startGame()})),c.dc(30,"Start"),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.Xb("translucent",!0),c.xb(2),c.Xb("ngIf",!e.isBrowser),c.xb(1),c.Xb("ngIf",e.isBrowser),c.xb(1),c.Xb("ngIf",!e.isBrowser),c.xb(4),c.Xb("fullscreen",!0))},directives:[s.h,s.o,r.h,s.d,s.c,s.i,s.f,s.j,s.k,s.g,s.m,s.e,s.n],styles:['#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-header[_ngcontent-%COMP%]{height:55px}ion-content[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80px;height:80px;text-align:center;font-size:25px;font-weight:700;margin:-3px -5px 0 0;--border-radius:0}[id="00"][_ngcontent-%COMP%]{--border-width:0px 5px 5px 0px}[id="10"][_ngcontent-%COMP%]{--border-width:0px 5px 5px 0}[id="20"][_ngcontent-%COMP%]{--border-width:0px 5px 0 0}[id="01"][_ngcontent-%COMP%], [id="11"][_ngcontent-%COMP%]{--border-width:0px 5px 5px 0}[id="21"][_ngcontent-%COMP%]{--border-width:0px 5px 0 0}[id="02"][_ngcontent-%COMP%], [id="12"][_ngcontent-%COMP%]{--border-width:0px 0px 5px 0}[id="22"][_ngcontent-%COMP%]{--border-width:0px 0px 0 0}ion-footer[_ngcontent-%COMP%]{height:55px}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:55px;text-transform:none}']}),f)}],x=((v=function e(){t(this,e)}).\u0275mod=c.Fb({type:v}),v.\u0275inj=c.Eb({factory:function(t){return new(t||v)},imports:[[h.i.forChild(p)],h.i]}),v),k=((g=function e(){t(this,e)}).\u0275mod=c.Fb({type:g}),g.\u0275inj=c.Eb({factory:function(t){return new(t||g)},imports:[[r.b,o.a,s.p,x]]}),g)}}])}();