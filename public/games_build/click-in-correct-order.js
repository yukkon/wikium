webpackJsonp([35],{"3hjg":function(e,t,n){"use strict";angular.module("wgGame").config(["$stateProvider",function(e){e.state("game",{views:{pages:{templateUrl:"game-container.html"},"container@game":{template:n("t6Nx")}}})}])},"6abe":function(e,t,n){"use strict";n("/jXN").module("wgGame",["hmTouchEvents","wgCore"]).constant("gameName","click-in-correct-order")},"8v5g":function(e,t){e.exports=PIXI},BqUm:function(e,t,n){"use strict";var i,c;i=[n("/jXN")],void 0!==(c=function(e){function t(e,t,n,i,c){function a(e){t.answer(n.mapKeyToAnswer(e.keyCode))}var r=0;t.gameState=n.buildInitialGameState(),t.answer=function(i){i===t.gameState.currentAnswer&&(r++,r>2?e.go("game"):n.handleAnswer(i))},c.on("keydown",a),t.$on("$destroy",function(){c.off("keydown",a)}),i(function(){n.buildGameState()},0)}e.module("wgGame").config(["$stateProvider",function(e){e.state("game-training",{views:{pages:{template:n("aXHT"),controller:["$state","$scope","MatchGameStrategy","$timeout","$document",t]}}})}])}.apply(t,i))&&(e.exports=c)},CCI2:function(e,t){},HWZb:function(e,t){e.exports=p2},MpBu:function(e,t,n){"use strict";angular.module("wgGame").run(["$state",function(e){e.go("firstGameIframe"==window.name?"screen11":"loading")}])},Xs1N:function(e,t,n){"use strict";n("6abe"),n("3hjg"),n("aDJZ"),n("6Tig"),n("CCI2"),n("MpBu"),n("BqUm")},aDJZ:function(e,t,n){"use strict";angular.module("wgGame").service("MatchGameStrategy",["wgProperties","wgWaitSeconds",function(e,t){function n(){var e=a.getProperty("matrix")||{n:3,m:3,minNumber:1,numbersCount:3},t=e.n,n=e.m,i=_.range(e.numbersCount).map(function(t){return t+e.minNumber}),r=_.chain(i).concat(_.times(t*n-i.length,function(){return 0})).shuffle().map(function(e){return{number:e,good:!1,bad:!1,active:!1,correct:!1}}).value();c.numberCount=e.numbersCount,c.field=_.chunk(r,t),c.matrixClass=t>=7?"click-ico--matrix-large":t>=6?"click-ico--matrix-middle":"",c.currentAnswer=e.minNumber}function i(e){return _.find(_.flatten(c.field),function(t){return t.number==e})}var c,a=e.build();this.buildInitialGameState=function(){return c={init:!1,answer:!1,numberCount:0,field:[],currentAnswer:0}},this.buildGameState=function(){return t(c.init?.7:0)().then(function(){return c.field=null,c.answer=!0,c.init=!0,t(0)().then(function(){n()}).then(t(.9)).then(function(){return c.answer=!1,c})})},this.mapKeyToAnswer=function(e){},this.handleAnswer=function(e){var t=i(e);return 0==t.number||t.active?angular.undefined:e!=c.currentAnswer?(t.bad=!0,i(c.currentAnswer).correct=!0,c.numberCount=0,!1):(t.active=!0,c.numberCount-=1,c.numberCount<=0?t.good=!0:c.currentAnswer+=1,!0)},this.isReadyForNextState=function(){return 0==c.numberCount},this.destroyGameState=function(){}}])},aXHT:function(e,t){e.exports='<div class="game-screen game-screen--click-ico"> <div class=click-ico ng-class="{\'game-state-init\': gameState.answer}"> <h5 class="game-screen__instruction click-ico__instruction">{{ \'game.title\'|translate|capitalize }}</h5> <div class=click-ico__container ng-if="gameState.field.length > 0"> <div ng-repeat="row in gameState.field" class=click-ico__row> <div ng-repeat="item in row" class=click-ico__cell ng-mousedown="item.number > 0 ? answer(item.number) : null" ng-class="{\'is-success\': item.number && item.good, \'is-fail\': item.number && item.bad, \'click-ico__cell--correct-answer\':item.correct, \'click-ico__cell--is-active\':item.active }"> <div class=click-ico__number ng-class="{\'game-answer-hint\': item.number == gameState.currentAnswer}">{{ item.number > 0 ? item.number : "" }}</div> </div> </div> </div> </div> </div> '},t6Nx:function(e,t){e.exports='<div ng-controller=GameCtrl class="game-screen game-screen--click-ico"> <wg-menu></wg-menu> <div ui-view=stages></div> <div class=click-ico ng-class="gameState.matrixClass + (gameState.answer ? \' game-state-init\' : \'\')"> <h5 class="game-screen__instruction click-ico__instruction">{{ \'game.title\'|translate|capitalize }}</h5> <div class=click-ico__container ng-if="gameState.field.length > 0"> <div ng-repeat="row in gameState.field" class=click-ico__row> <div ng-repeat="item in row" class=click-ico__cell ng-mousedown="item.number > 0 ? answer(item.number) : null" ng-class="{\'is-success\': item.number && item.good, \'is-fail\': item.number && item.bad, \'click-ico__cell--correct-answer\':item.correct, \'click-ico__cell--is-active\':item.active }"> <div class=click-ico__number>{{ item.number > 0 ? item.number : "" }}</div> </div> </div> </div> </div> </div> '},tzQp:function(e,t){e.exports=Phaser}},["Xs1N"]);