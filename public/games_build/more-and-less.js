webpackJsonp([24],{"0WGJ":function(t,e,a){"use strict";a("a8U+"),a("sOU8"),a("S66I"),a("pRCW"),a("jgpm"),a("SRPe"),a("czhD")},"2Zdh":function(t,e){t.exports='<div class="game-screen game-screen--more-and-less"> <div class=more-and-less> <div class=more-and-less__inner> <div class=more-and-less__tasks ng-class="((!gameState.init || gameState.answer) ? \' clip-xy-in \' : \' \') + gameState.tasksClass "> <div class=more-and-less__task> <p class=more-and-less__task-text ng-if="!gameState.answer && gameState.init"> {{gameState.left.toString()}} </p> </div> <div class=more-and-less__task> <p class=more-and-less__task-text ng-if="!gameState.answer && gameState.init"> {{gameState.right.toString()}} </p> </div> </div> <div class=button-set> <button ng-repeat="btn in gameState.buttons" class="{{\'button-set__item button-set__item--\' + btn.cls}}" ng-class="{\'button-set__item--active\':btn.active, \'game-answer\': isTraining && gameState.currentAnswer == btn.answer && !gameState.answer}" ng-click=answer(btn.answer) type=button> <span class=button-set__icon> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 14 24"> <path d="M.5 17v4.6c0 1.8 1.2 2.53 2.65 1.63l9.46-9.57a1.76 1.76 0 0 0 0-3.26L3.15.88C1.7 0 .5.72.5 2.52V17zm0-14.48"/> </svg> </span> <span class=button-set__text>{{ btn.text|translate|capitalize }}</span> </button> </div> </div> </div> </div> '},"8v5g":function(t,e){t.exports=PIXI},FnOD:function(t,e){t.exports='<div ng-controller=GameCtrl class="game-screen game-screen--more-and-less"> <wg-menu></wg-menu> <wg-answer-result></wg-answer-result> <div ui-view=stages></div> <div class=more-and-less> <div class=more-and-less__inner> <div class=more-and-less__tasks ng-class="((!gameState.init || gameState.answer) ? \' clip-xy-in \' : \' \') + gameState.tasksClass "> <div class=more-and-less__task> <p class=more-and-less__task-text ng-if="!gameState.answer && gameState.init"> {{gameState.left.toString()}} </p> </div> <div class=more-and-less__task> <p class=more-and-less__task-text ng-if="!gameState.answer && gameState.init"> {{gameState.right.toString()}} </p> </div> </div> <div class=button-set> <button ng-repeat="btn in gameState.buttons" class="{{\'button-set__item button-set__item--\' + btn.cls}}" ng-class="{\'button-set__item--active\':btn.active, \'game-answer\': isTraining && gameState.currentAnswer == btn.answer && !gameState.answer}" ng-click=answer(btn.answer) type=button> <span class=button-set__icon> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 14 24"> <path d="M.5 17v4.6c0 1.8 1.2 2.53 2.65 1.63l9.46-9.57a1.76 1.76 0 0 0 0-3.26L3.15.88C1.7 0 .5.72.5 2.52V17zm0-14.48"/> </svg> </span> <span class=button-set__text>{{ btn.text|translate|capitalize }}</span> </button> </div> </div> </div> </div> '},HWZb:function(t,e){t.exports=p2},S66I:function(t,e,a){"use strict";var s=a("ckMR");angular.module("wgGame").service("MatchGameStrategy",["$rootScope","wgProperties","$timeout","wgWaitSeconds",function(t,e,a,n){function i(t,e){var a=Math.max(t.toString().toString().length,e.toString().toString().length);return a>=18?"more-and-less__tasks--long":a<=9?"more-and-less__tasks--small":"more-and-less__tasks--medium"}var r,o=e.build(),l=["equal","left","right"],c={operationsPerExpression:0,maxResult:100,operands:null},m=[{cls:"left",answer:"left",text:"game.left"},{cls:"right",answer:"right",text:"game.right"},{cls:"down",answer:"equal",text:"game.equal"}];this.buildInitialGameState=function(){return r={init:!1,answer:!1,left:null,right:null,tasksClass:"",currentAnswer:"",buttons:m}},this.buildGameState=function(){return r.answer=r.init,n(.5)().then(function(){r.init=!0,r.answer=!1;var t=o.getProperty("strategies"),e=_.sample(t)||c,a=_.sample(t)||c,n=s.express(e),l=n.eval(),m=s.express(a),g=m.eval();return r.left=n,r.right=m,r.currentAnswer=l===g?"equal":l<g?"right":"left",r.tasksClass=i(r.left,r.right),r})},this.mapGameStateToAnswer=function(){return r.currentAnswer},this.handleAnswer=function(t){var e=_.find(m,function(e){return e.answer==t});e.active=!0,a(function(){return e.active=!1},300)},this.mapKeyToAnswer=function(t){switch(t){case 40:return l[0];case 39:return l[2];case 37:return l[1]}}}])},SRPe:function(t,e,a){"use strict";angular.module("wgGame").run(["$state",function(t){t.go("loading")}])},"a8U+":function(t,e,a){"use strict";a("/jXN").module("wgGame",["hmTouchEvents","wgCore"]).constant("gameName","more-and-less")},czhD:function(t,e,a){"use strict";var s,n;s=[a("/jXN")],void 0!==(n=function(t){function e(t,e,a,s){var n=0;e.gameState=a.buildInitialGameState(),e.isTraining=!0,e.answer=function(i){i===e.mapGameStateToAnswer()&&(s(function(){return a.handleAnswer(i)},0),n++,n>2?t.go("game"):a.buildGameState())},e.$on("keydown",function(t,s){e.answer(a.mapKeyToAnswer(s))}),e.mapGameStateToAnswer=function(){return a.mapGameStateToAnswer()},s(function(){a.buildGameState()},0)}t.module("wgGame").config(["$stateProvider",function(t){t.state("game-training",{views:{pages:{template:a("2Zdh"),controller:["$state","$scope","MatchGameStrategy","$timeout",e]}}})}])}.apply(e,s))&&(t.exports=n)},jgpm:function(t,e){},sOU8:function(t,e,a){"use strict";angular.module("wgGame").config(["$stateProvider",function(t){t.state("game",{views:{pages:{templateUrl:"game-container.html"},"container@game":{template:a("FnOD")}}})}])},tzQp:function(t,e){t.exports=Phaser}},["0WGJ"]);