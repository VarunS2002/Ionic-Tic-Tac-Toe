(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(t,e,i){"use strict";i.r(e),i.d(e,"HomePageModule",(function(){return u}));var a=i("ofXK"),n=i("TEn/"),s=i("3Pt+"),o=i("tyNb"),d=i("mrSG"),r=i("kL6T"),h=i("fXoL"),c=i("e8h1");function l(t,e){if(1&t){const t=h.Lb();h.Kb(0,"ion-item",1),h.Sb("click",(function(){return h.Zb(t),h.Ub().alertExit()})),h.dc(1," \xa0\xa0\xa0\xa0 "),h.Kb(2,"span",2),h.dc(3,"arrow_back"),h.Jb(),h.Kb(4,"ion-label"),h.dc(5,"\xa0\xa0\xa0\xa0\xa0Exit"),h.Jb(),h.Ib(6,"ion-ripple-effect"),h.Jb()}}const b=[{path:"",component:(()=>{class t{constructor(t,e,i,a,n,s){this.platform=t,this.alertController=e,this.renderer=i,this.storage=a,this.menu=n,this.modalController=s,this.data=[["","",""],["","",""],["","",""]],this.mode="1P",this.human=!0,this.gameOver=!1,this.scores={X:-1,O:1,T:0},this.scoreX=0,this.scoreO=0,this.scoreT=0,this.theme="dark",this.setTheme(!0),this.isBrowser=this.platform.is("desktop")||this.platform.is("mobileweb"),this.subscription=this.platform.backButton.subscribeWithPriority(1e4,()=>Object(d.a)(this,void 0,void 0,(function*(){yield this.alertExit()})))}menuOpened(){this.subscription.unsubscribe(),this.subscription=this.platform.backButton.subscribe(()=>Object(d.a)(this,void 0,void 0,(function*(){yield this.menu.close()})))}menuClosed(){this.subscription.unsubscribe(),this.subscription=this.platform.backButton.subscribe(()=>Object(d.a)(this,void 0,void 0,(function*(){yield this.alertExit()})))}goTo(t){"about"===t&&(this.subscription.unsubscribe(),this.aboutPageModal())}move(t){if("Start"===document.getElementById("start-game").innerHTML&&(document.getElementById("start-game").innerHTML="Restart Game"),!this.gameOver){if(this.human){if(""===document.getElementById(t).innerHTML&&(document.getElementById(t).innerHTML="X","2P"===this.mode&&(document.getElementById("next-label").innerHTML="O"),this.data[Number(t.substr(0,1))][Number(t.substr(1,2))]="X",this.human=!1,this.winner("check"),this.gameOver))return}else this.human||"2P"===this.mode&&""===document.getElementById(t).innerHTML&&(document.getElementById(t).innerHTML="O",document.getElementById("next-label").innerHTML="X",this.data[Number(t.substr(0,1))][Number(t.substr(1,2))]="O",this.human=!0);"1P"===this.mode&&(this.human||(this.aiTurn(),this.human=!0)),this.winner("check")}}startGame(){"Start"===document.getElementById("start-game").innerHTML?(document.getElementById("start-game").innerHTML="Restart Game",this.aiTurn()):"Restart Game"===document.getElementById("start-game").innerHTML&&this.restartGame()}aiTurn(){let t,e=-1/0;for(let i=0;i<3;i++)for(let a=0;a<3;a++)if(""===this.data[i][a]){this.data[i][a]="O";let n=this.minimax(!1);this.data[i][a]="",n>e&&(e=n,t={x:i,y:a})}this.data[t.x][t.y]="O",document.getElementById(String(t.x)+String(t.y)).innerHTML="O"}minimax(t,e=-1/0,i=1/0){let a=this.winner("minimax");if(null!==a)return this.scores[a];if(t){let t=-1/0;for(let a=0;a<3;a++)for(let n=0;n<3;n++)if(""===this.data[a][n]){this.data[a][n]="O";let s=this.minimax(!1,e,i);if(this.data[a][n]="",t=Math.max(s,t),i<=(e=Math.max(e,s)))break}return t}{let t=1/0;for(let a=0;a<3;a++)for(let n=0;n<3;n++)if(""===this.data[a][n]){this.data[a][n]="X";let s=this.minimax(!0,e,i);if(this.data[a][n]="",t=Math.min(s,t),(i=Math.min(i,s))<=e)break}return t}}winner(t){let e,i=0;if("minimax"===t){if(e="X",this.data[0][0]===this.data[0][1]&&this.data[0][1]===this.data[0][2]&&this.data[0][2]===e||this.data[1][0]===this.data[1][1]&&this.data[1][1]===this.data[1][2]&&this.data[1][2]===e||this.data[2][0]===this.data[2][1]&&this.data[2][1]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][0]&&this.data[1][0]===this.data[2][0]&&this.data[2][0]===e||this.data[0][1]===this.data[1][1]&&this.data[1][1]===this.data[2][1]&&this.data[2][1]===e||this.data[0][2]===this.data[1][2]&&this.data[1][2]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][1]&&this.data[1][1]===this.data[2][2]&&this.data[2][2]===e||this.data[2][0]===this.data[1][1]&&this.data[1][1]===this.data[0][2]&&this.data[0][2]===e)return"X";if(e="O",this.data[0][0]===this.data[0][1]&&this.data[0][1]===this.data[0][2]&&this.data[0][2]===e||this.data[1][0]===this.data[1][1]&&this.data[1][1]===this.data[1][2]&&this.data[1][2]===e||this.data[2][0]===this.data[2][1]&&this.data[2][1]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][0]&&this.data[1][0]===this.data[2][0]&&this.data[2][0]===e||this.data[0][1]===this.data[1][1]&&this.data[1][1]===this.data[2][1]&&this.data[2][1]===e||this.data[0][2]===this.data[1][2]&&this.data[1][2]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][1]&&this.data[1][1]===this.data[2][2]&&this.data[2][2]===e||this.data[2][0]===this.data[1][1]&&this.data[1][1]===this.data[0][2]&&this.data[0][2]===e)return"O";for(let t=0;t<3;t++)for(let e=0;e<3;e++)""===this.data[t][e]&&i++;return 0===i?"T":null}if("check"===t){if(e="X",this.data[0][0]===this.data[0][1]&&this.data[0][1]===this.data[0][2]&&this.data[0][2]===e||this.data[1][0]===this.data[1][1]&&this.data[1][1]===this.data[1][2]&&this.data[1][2]===e||this.data[2][0]===this.data[2][1]&&this.data[2][1]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][0]&&this.data[1][0]===this.data[2][0]&&this.data[2][0]===e||this.data[0][1]===this.data[1][1]&&this.data[1][1]===this.data[2][1]&&this.data[2][1]===e||this.data[0][2]===this.data[1][2]&&this.data[1][2]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][1]&&this.data[1][1]===this.data[2][2]&&this.data[2][2]===e||this.data[2][0]===this.data[1][1]&&this.data[1][1]===this.data[0][2]&&this.data[0][2]===e)return this.alertX(),this.scoreX+=1,document.getElementById("score-x-label").innerHTML=String(this.scoreX),document.getElementById("next-label").innerHTML="-",void(this.gameOver=!0);if(e="O",this.data[0][0]===this.data[0][1]&&this.data[0][1]===this.data[0][2]&&this.data[0][2]===e||this.data[1][0]===this.data[1][1]&&this.data[1][1]===this.data[1][2]&&this.data[1][2]===e||this.data[2][0]===this.data[2][1]&&this.data[2][1]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][0]&&this.data[1][0]===this.data[2][0]&&this.data[2][0]===e||this.data[0][1]===this.data[1][1]&&this.data[1][1]===this.data[2][1]&&this.data[2][1]===e||this.data[0][2]===this.data[1][2]&&this.data[1][2]===this.data[2][2]&&this.data[2][2]===e||this.data[0][0]===this.data[1][1]&&this.data[1][1]===this.data[2][2]&&this.data[2][2]===e||this.data[2][0]===this.data[1][1]&&this.data[1][1]===this.data[0][2]&&this.data[0][2]===e)return this.alertO(),this.scoreO+=1,document.getElementById("score-o-label").innerHTML=String(this.scoreO),document.getElementById("next-label").innerHTML="-",void(this.gameOver=!0);for(let t=0;t<3;t++)for(let e=0;e<3;e++)""===this.data[t][e]&&i++;if(0===i)return this.alertT(),this.scoreT+=1,document.getElementById("score-t-label").innerHTML=String(this.scoreT),document.getElementById("next-label").innerHTML="-",void(this.gameOver=!0)}}restartGame(t=null){this.data=[["","",""],["","",""],["","",""]],this.human=!0,this.gameOver=!1;for(let e=0;e<3;e++)for(let t=0;t<3;t++)document.getElementById(String(e)+String(t)).innerHTML="";"1P"===this.mode?(document.getElementById("start-game").innerHTML="Start",document.getElementById("next-label").innerHTML="-"):(document.getElementById("start-game").innerHTML="Restart Game",document.getElementById("next-label").innerHTML="X"),null!==t&&(this.resetScores(),setTimeout(()=>{t.target.complete()},250))}resetScores(){this.scoreX=0,this.scoreO=0,this.scoreT=0,document.getElementById("score-x-label").innerHTML=String(this.scoreX),document.getElementById("score-o-label").innerHTML=String(this.scoreO),document.getElementById("score-t-label").innerHTML=String(this.scoreT)}changeMode(){"1P"===document.getElementById("mode-label").innerHTML?(this.mode="2P",document.getElementById("mode-label").innerHTML="2P",document.getElementById("next-label").innerHTML="X"):(this.mode="1P",document.getElementById("mode-label").innerHTML="1P",document.getElementById("next-label").innerHTML="-"),this.restartGame(),this.resetScores()}alertT(){return Object(d.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({cssClass:"alert-game-over",header:"Game Over",message:"Draw",buttons:["OK"]});yield t.present()}))}alertO(){return Object(d.a)(this,void 0,void 0,(function*(){let t;t="1P"===this.mode?"You Lost":"O Won";const e=yield this.alertController.create({cssClass:"alert-game-over",header:"Game Over",message:t,buttons:["OK"]});yield e.present()}))}alertX(){return Object(d.a)(this,void 0,void 0,(function*(){let t;t="1P"===this.mode?"You Won":"X Won";const e=yield this.alertController.create({cssClass:"alert-game-over",header:"Game Over",message:t,buttons:["OK"]});yield e.present()}))}setTheme(t,e=null){t?this.storage.get("theme").then(t=>{null!=t?(this.theme=t,this.setTheme(!1,t)):this.setTheme(!1,"dark")}):"dark"===e?(this.renderer.setAttribute(document.body,"color-theme","dark"),this.theme="dark",this.storage.set("theme","dark")):"light"===e?(this.renderer.setAttribute(document.body,"color-theme","light"),this.theme="light",this.storage.set("theme","light")):"light"===this.theme?(this.renderer.setAttribute(document.body,"color-theme","dark"),this.theme="dark",this.storage.set("theme","dark")):"dark"===this.theme&&(this.renderer.setAttribute(document.body,"color-theme","light"),this.theme="light",this.storage.set("theme","light"))}aboutPageModal(){return Object(d.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:r.a,cssClass:"about-page"});return t.onDidDismiss().then(()=>{this.subscription.unsubscribe(),this.subscription=this.platform.backButton.subscribe(()=>Object(d.a)(this,void 0,void 0,(function*(){yield this.menu.close()})))}),yield t.present()}))}alertExit(){return Object(d.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({cssClass:"alert-exit",header:"Exit Game",message:"Are you sure you want to exit the game ?",buttons:[{text:"YES",handler:()=>{navigator.app.exitApp()}},{text:"NO",role:"cancel"}]});yield t.present()}))}}return t.\u0275fac=function(e){return new(e||t)(h.Hb(n.B),h.Hb(n.a),h.Hb(h.D),h.Hb(c.b),h.Hb(n.z),h.Hb(n.A))},t.\u0275cmp=h.Bb({type:t,selectors:[["app-home"]],decls:88,vars:2,consts:[["side","start","menuId","side-menu","contentId","main",1,"side-menu",3,"ionWillOpen","ionWillClose"],[1,"ion-activatable",2,"margin-left","-15px",3,"click"],[1,"material-icons"],["class","ion-activatable","style","margin-left: -15px",3,"click",4,"ngIf"],["id","main",1,"ion-page"],["slot","start"],[2,"margin-left","-50px"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["id","container"],["id","00","fill","outline",3,"click"],["id","01","fill","outline",3,"click"],["id","02","fill","outline",3,"click"],["id","10","fill","outline",3,"click"],["id","11","fill","outline",3,"click"],["id","12","fill","outline",3,"click"],["id","20","fill","outline",3,"click"],["id","21","fill","outline",3,"click"],["id","22","fill","outline",3,"click"],["id","labels"],[1,"ion-no-padding","ion-no-margin"],["id","mode-label"],["id","score-x-label"],["id","score-o-label"],["id","score-t-label"],["id","next-label"],[1,"ion-no-padding"],["expand","full","id","change-mode",1,"ion-no-margin",3,"click"],["expand","full","id","start-game",1,"ion-no-margin",3,"click"]],template:function(t,e){1&t&&(h.Kb(0,"ion-menu",0),h.Sb("ionWillOpen",(function(){return e.menuOpened()}))("ionWillClose",(function(){return e.menuClosed()})),h.Kb(1,"ion-header"),h.Kb(2,"ion-toolbar"),h.Kb(3,"ion-title"),h.dc(4,"Menu"),h.Jb(),h.Jb(),h.Jb(),h.Kb(5,"ion-content"),h.Kb(6,"ion-item",1),h.Sb("click",(function(){return e.setTheme(!1)})),h.dc(7," \xa0\xa0\xa0\xa0 "),h.Kb(8,"span",2),h.dc(9,"brightness_6"),h.Jb(),h.Kb(10,"ion-label"),h.dc(11,"\xa0\xa0\xa0\xa0\xa0Switch Theme"),h.Jb(),h.Ib(12,"ion-ripple-effect"),h.Jb(),h.Kb(13,"ion-item",1),h.Sb("click",(function(){return e.goTo("about")})),h.dc(14," \xa0\xa0\xa0\xa0 "),h.Kb(15,"span",2),h.dc(16,"info"),h.Jb(),h.Kb(17,"ion-label"),h.dc(18,"\xa0\xa0\xa0\xa0\xa0About"),h.Jb(),h.Ib(19,"ion-ripple-effect"),h.Jb(),h.cc(20,l,7,0,"ion-item",3),h.Jb(),h.Jb(),h.Kb(21,"div",4),h.Kb(22,"ion-header"),h.Kb(23,"ion-toolbar"),h.Kb(24,"ion-buttons",5),h.Ib(25,"ion-menu-button"),h.Jb(),h.Kb(26,"ion-title",6),h.dc(27,"Tic-Tac-Toe"),h.Jb(),h.Jb(),h.Jb(),h.Kb(28,"ion-content",7),h.Kb(29,"ion-refresher",8),h.Sb("ionRefresh",(function(t){return e.restartGame(t)})),h.Ib(30,"ion-refresher-content"),h.Jb(),h.Kb(31,"div",9),h.Kb(32,"ion-button",10),h.Sb("click",(function(){return e.move("00")})),h.Jb(),h.Kb(33,"ion-button",11),h.Sb("click",(function(){return e.move("01")})),h.Jb(),h.Kb(34,"ion-button",12),h.Sb("click",(function(){return e.move("02")})),h.Jb(),h.Ib(35,"br"),h.Kb(36,"ion-button",13),h.Sb("click",(function(){return e.move("10")})),h.Jb(),h.Kb(37,"ion-button",14),h.Sb("click",(function(){return e.move("11")})),h.Jb(),h.Kb(38,"ion-button",15),h.Sb("click",(function(){return e.move("12")})),h.Jb(),h.Ib(39,"br"),h.Kb(40,"ion-button",16),h.Sb("click",(function(){return e.move("20")})),h.Jb(),h.Kb(41,"ion-button",17),h.Sb("click",(function(){return e.move("21")})),h.Jb(),h.Kb(42,"ion-button",18),h.Sb("click",(function(){return e.move("22")})),h.Jb(),h.Jb(),h.Kb(43,"div",19),h.Kb(44,"ion-row",20),h.Kb(45,"ion-col",20),h.Kb(46,"ion-card"),h.Kb(47,"ion-card-header"),h.Kb(48,"ion-card-subtitle"),h.dc(49,"Mode"),h.Jb(),h.Kb(50,"ion-card-title",21),h.dc(51,"1P"),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Kb(52,"ion-col",20),h.Kb(53,"ion-card"),h.Kb(54,"ion-card-header"),h.Kb(55,"ion-card-subtitle"),h.dc(56,"X"),h.Jb(),h.Kb(57,"ion-card-title",22),h.dc(58,"0"),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Kb(59,"ion-col",20),h.Kb(60,"ion-card"),h.Kb(61,"ion-card-header"),h.Kb(62,"ion-card-subtitle"),h.dc(63,"O"),h.Jb(),h.Kb(64,"ion-card-title",23),h.dc(65,"0"),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Kb(66,"ion-col",20),h.Kb(67,"ion-card"),h.Kb(68,"ion-card-header"),h.Kb(69,"ion-card-subtitle"),h.dc(70,"Draws"),h.Jb(),h.Kb(71,"ion-card-title",24),h.dc(72,"0"),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Kb(73,"ion-col",20),h.Kb(74,"ion-card"),h.Kb(75,"ion-card-header"),h.Kb(76,"ion-card-subtitle"),h.dc(77,"Next"),h.Jb(),h.Kb(78,"ion-card-title",25),h.dc(79,"-"),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Kb(80,"ion-footer"),h.Kb(81,"ion-row"),h.Kb(82,"ion-col",26),h.Kb(83,"ion-button",27),h.Sb("click",(function(){return e.changeMode()})),h.dc(84,"Change Mode"),h.Jb(),h.Jb(),h.Kb(85,"ion-col",26),h.Kb(86,"ion-button",28),h.Sb("click",(function(){return e.startGame()})),h.dc(87,"Start"),h.Jb(),h.Jb(),h.Jb(),h.Jb(),h.Jb()),2&t&&(h.xb(20),h.Xb("ngIf",!e.isBrowser),h.xb(8),h.Xb("fullscreen",!0))},directives:[n.o,n.l,n.w,n.v,n.j,n.m,n.n,n.s,a.h,n.d,n.p,n.q,n.r,n.c,n.u,n.i,n.e,n.f,n.g,n.h,n.k],styles:['.side-menu[_ngcontent-%COMP%]{--width:300px}ion-header[_ngcontent-%COMP%]{height:55px}#container[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{text-align:center}#container[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80px;height:80px;text-align:center;font-size:25px;font-weight:700;margin:-3px -5px 0 0;--border-radius:0}[id="00"][_ngcontent-%COMP%]{--border-width:0px 5px 5px 0px}[id="10"][_ngcontent-%COMP%]{--border-width:0px 5px 5px 0}[id="20"][_ngcontent-%COMP%]{--border-width:0px 5px 0 0}[id="01"][_ngcontent-%COMP%], [id="11"][_ngcontent-%COMP%]{--border-width:0px 5px 5px 0}[id="21"][_ngcontent-%COMP%]{--border-width:0px 5px 0 0}[id="02"][_ngcontent-%COMP%], [id="12"][_ngcontent-%COMP%]{--border-width:0px 0px 5px 0}[id="22"][_ngcontent-%COMP%]{--border-width:0px 0px 0 0}#labels[_ngcontent-%COMP%]{position:absolute;bottom:10%;width:100%}#labels[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:2px;padding:0!important}#labels[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px}ion-footer[_ngcontent-%COMP%]{height:55px}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:55px;text-transform:none}']}),t})()}];let m=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(b)],o.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(e){return new(e||t)},imports:[[a.b,s.a,n.x,m]]}),t})()}}]);