webpackJsonp([17],{"2ZuX":function(t,e){t.exports='<div ng-controller=GameCtrl class="game-screen game-screen--rotate"> <wg-menu></wg-menu> <wg-answer-result></wg-answer-result> <wg-game-answer-yes-no on-click=answer(click) ng-show="$root.countDown.left == 0"></wg-game-answer-yes-no> <div ui-view=stages></div> <div ui-view=popups></div> <div class=rotate> <h5 class="game-screen__instruction rotate__instruction">{{\'game.title\'|translate|capitalize}}</h5> <div class=rotate__inner> <div class=rotate__container ng-class="{\'clip-xy-in\': !gameState.init, \'rotate-bg\':gameState.answer}"> <div class=rotate__box ng-show=gameState.initAnimation> <div ng-repeat="row in gameState.items" class=rotate__row ng-show=gameState.init> <div ng-repeat="item in row" class=rotate__item ng-class="{\'rotate__item--is-blue\':item.id == 1, \'rotate__item--is-yellow\':item.id == 2}"></div> </div> </div> <div ng-show=gameState.initAnimation class="rotate__box rotate__box--turn-{{gameState.turn}}"> <div ng-repeat="row in gameState.turnItems" class=rotate__row> <div ng-repeat="item in row" class=rotate__item ng-show=gameState.init ng-class="{\'rotate__item--is-blue\':item.id == 1, \'rotate__item--is-yellow\':item.id == 2}"></div> </div> </div> </div> </div> </div> </div> '},"3XVT":function(t,e,n){"use strict";angular.module("wgGame").service("MatchGameStrategy",["$rootScope","wgProperties","$timeout","wgWaitSeconds",function(t,e,n,i){function a(t,e,n){var i=_.chain(_.range(n).map(function(){return _.random(1,2)})).concat(_.times(t*e-n,function(){return 0})).shuffle().value();return _.range(e).map(function(e){return _.range(t).map(function(n){return{id:i[e*t+n]}})})}function r(t,e){function n(t,e){return 0==t?1:t==e-1?e-2:t+(Math.randomBoolean()?1:-1)}var i=t.length,a=t[0].length,r=_.chain(_.range(i)).flatMap(function(e){return _.range(a).map(function(n){return{row:e,col:n,id:t[e][n].id}})}).filter(function(t){return t.id>0}).sample().value();t[r.row][r.col].id=0,t[n(r.row,i)][n(r.col,a)].id=r.id}var o,s=e.build();this.buildInitialGameState=function(){return o={init:!1,initAnimation:!1,answer:!1,items:[],turnItems:[],turn:0,currentAnswer:""}},this.buildGameState=function(){return o.answer=o.init,i(o.init?.5:0)().then(function(){var t=s.getProperty("items.n"),e=s.getProperty("items.m"),c=s.getProperty("items.count"),m=Math.randomBoolean(),u=a(t,e,c),g=_.cloneDeep(u);return o.init||n(function(){return o.initAnimation=!0},50),m||r(g),_.merge(o.items,u),_.merge(o.turnItems,g),o.turn=90*_.random(1,3),o.currentAnswer=m?"yes":"no",i(.5)().then(function(){return o.init=!0,o.answer=!1,o})})},this.mapGameStateToAnswer=function(){return o.currentAnswer},this.mapKeyToAnswer=function(t){switch(t){case 39:return"yes";case 37:return"no"}}}])},"8v5g":function(t,e){t.exports=PIXI},"9DDR":function(t,e,n){"use strict";var i,a;i=[n("/jXN")],void 0!==(a=function(t){function e(t,e,n,i,a){function r(t){e.answer(n.mapKeyToAnswer(t.keyCode))}var o=0;e.gameState=n.buildInitialGameState(),e.answer=function(a){a===e.mapGameStateToAnswer()&&(o++,o>2?t.go("game"):i(function(){n.buildGameState()},100))},a.on("keydown",r),e.mapGameStateToAnswer=function(){return n.mapGameStateToAnswer()},e.$on("$destroy",function(){a.off("keydown",r)}),i(function(){n.buildGameState()},0)}t.module("wgGame").config(["$stateProvider",function(t){t.state("game-training",{views:{pages:{template:n("gti/"),controller:["$state","$scope","MatchGameStrategy","$timeout","$document",e]}}})}])}.apply(e,i))&&(t.exports=a)},CPcG:function(t,e,n){"use strict";n("XhbZ"),n("ESui"),n("3XVT"),n("pRCW"),n("JXSB"),n("DSle"),n("9DDR")},DSle:function(t,e,n){"use strict";angular.module("wgGame").run(["$state",function(t){t.go("loading")}])},ESui:function(t,e,n){"use strict";angular.module("wgGame").config(["$stateProvider",function(t){t.state("game",{views:{pages:{templateUrl:"game-container.html"},"container@game":{template:n("2ZuX")}}})}])},HWZb:function(t,e){t.exports=p2},JXSB:function(t,e){},XhbZ:function(t,e,n){"use strict";n("/jXN").module("wgGame",["hmTouchEvents","wgCore"]).constant("gameName","rotate")},"gti/":function(t,e){t.exports='<div class="game-screen game-screen--rotate"> <wg-game-answer-yes-no ng-class="\'game-answer-\' + mapGameStateToAnswer()" on-click=answer(click)></wg-game-answer-yes-no> <div class=rotate> <h5 class="game-screen__instruction rotate__instruction">{{\'game.title\'|translate|capitalize}}</h5> <div class=rotate__inner> <div class=rotate__container ng-class="{\'clip-xy-in\': !gameState.init, \'rotate-bg\':gameState.answer}"> <div class=rotate__box ng-show=gameState.initAnimation> <div ng-repeat="row in gameState.items" class=rotate__row ng-show=gameState.init> <div ng-repeat="item in row" class=rotate__item ng-class="{\'rotate__item--is-blue\':item.id == 1, \'rotate__item--is-yellow\':item.id == 2}"></div> </div> </div> <div ng-show=gameState.initAnimation class="rotate__box rotate__box--turn-{{gameState.turn}}"> <div ng-repeat="row in gameState.turnItems" class=rotate__row> <div ng-repeat="item in row" class=rotate__item ng-show=gameState.init ng-class="{\'rotate__item--is-blue\':item.id == 1, \'rotate__item--is-yellow\':item.id == 2}"></div> </div> </div> </div> </div> </div> </div> '},tzQp:function(t,e){t.exports=Phaser}},["CPcG"]);