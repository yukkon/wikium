webpackJsonp([34],{"0lNA":function(e,a,t){"use strict";t("Vgd1"),t("FYMJ"),t("Kr92"),t("pRCW"),t("6Lzs"),t("hVCE"),t("O1/F")},"6Lzs":function(e,a){},"8v5g":function(e,a){e.exports=PIXI},FYMJ:function(e,a,t){"use strict";angular.module("wgGame").config(["$stateProvider",function(e){e.state("game",{views:{pages:{templateUrl:"game-container.html"},"container@game":{template:t("n67a")}}})}])},HWZb:function(e,a){e.exports=p2},InZl:function(e,a){e.exports='<div class="game-training game-screen game-screen--color-match-2-reload"> <wg-game-answer-yes-no ng-class="\'game-answer-\' + mapGameStateToAnswer()" on-click=answer(click)></wg-game-answer-yes-no> <div class=game-color-match-2-reload> <div class=game-color-match-2-reload__inner> <h3 class=game-color-match-2-reload__task-text ng-bind-html="\'game.title\'|translate"> </h3> <div class=game-color-match-2-reload__cards> <div ng-repeat="column in gameState.columns" class=game-color-match-2-reload__card-wrap> <h5 class=game-color-match-2-reload__card-title> {{ column.title|translate|capitalize }} </h5> <div ng-if=gameState.init ng-repeat="item in column.items" class=game-color-match-2-reload__card ng-class="{\'game-color-match-2-reload__card--rotate\':gameState.answer}"> <span ng-if=!gameState.answer class=game-color-match-2-reload__card-value ng-style="{\'color\':item.value}"> {{ item.nameTitle|translate|capitalize }} </span> </div> </div> </div> </div> </div> </div> '},Kr92:function(e,a,t){"use strict";angular.module("wgGame").service("MatchGameStrategy",["wgGameSettings","wgProperties","$timeout","$q","wgWaitSeconds",function(e,a,t,n,r){function o(e){function a(e){var a=m.getProperty("colors.availableColor");return _.sample(a.filter(function(a){return a!==e}))}function t(t,n){if(e)return{};var r=i.colors,o=a(),c=n?t:a(t);return{name:o,color:c,value:r[c].value,nameTitle:r[o].title}}function n(e){var a=t();return[a,t(a.name,e)]}var r=[!0,!0],o=[[!0,!1],[!1,!1],[!1,!0]],c=Math.randomBoolean()?r:_.sample(o),s=_.unzip(c.map(function(e){return n(e)}));return[{title:"game.value",items:s[0]},{title:"game.color",items:s[1]}]}function c(e){var a=[];return s.answer&&a.push("game-color-match-2__card--rotate"),e&&a.push("game-color-match-2__card--"+e.name),a}var i,s,l,m=a.build();e().then(function(e){i=e}),this.buildInitialGameState=function(){return s={answer:!1,ready:!1,init:!1,columns:o(!0),correctAnswer:"",class:c}},this.buildGameState=function(){function e(){var e=o();s.correctAnswer=_.zip(e[0].items,e[1].items).every(function(e){return e[0].name===e[1].color})?"yes":"no",_.merge(s.columns,e)}var a;return s.init||(t(function(){s.init=!0},0),a=r(1)()),n.when(a).then(function(){s.ready=!0,l&&l.resolve(),l=n.defer(),e()})},this.isOver=function(){return!l.promise||l.promise},this.handleAnswer=function(){return s.answer=!0,r(.6)().then(function(){s.answer=!1,l.resolve()})},this.mapGameStateToAnswer=function(){return s.correctAnswer},this.mapKeyToAnswer=function(e){if(s.answer)return angular.undefined;switch(e){case 39:return"yes";case 37:return"no"}return angular.undefined}}])},"O1/F":function(e,a,t){"use strict";var n,r;n=[t("/jXN")],void 0!==(r=function(e){function a(e,a,t,n,r){function o(e){a.$apply(function(){return a.answer(t.mapKeyToAnswer(e.keyCode))})}var c=0;a.gameState=t.buildInitialGameState(),a.answer=function(r){r===a.mapGameStateToAnswer()&&(c++,c>1?e.go("game"):(a.gameState.answer=!0,n(function(){a.gameState.answer=!1,t.buildGameState()},600)))},r.on("keydown",o),a.mapGameStateToAnswer=function(){return t.mapGameStateToAnswer()},a.$on("$destroy",function(){r.off("keydown",o)}),n(function(){t.buildGameState()},0)}e.module("wgGame").config(["$stateProvider",function(e){e.state("game-training",{views:{pages:{template:t("InZl"),controller:["$state","$scope","MatchGameStrategy","$timeout","$document",a]}}})}])}.apply(a,n))&&(e.exports=r)},Vgd1:function(e,a,t){"use strict";t("/jXN").module("wgGame",["wgCore"]).constant("gameName","color-match-2-reload")},hVCE:function(e,a,t){"use strict";angular.module("wgGame").run(["$state",function(e){e.go("firstGameIframe"==window.name?"screen11":"loading")}])},n67a:function(e,a){e.exports='<div ng-controller=GameCtrl class="game-screen game-screen--color-match-2-reload"> <wg-menu></wg-menu> <wg-game-answer-yes-no on-click=answer(click) disabled=gameState.answer ng-show="$root.countDown.left == 0"></wg-game-answer-yes-no> <div ui-view=stages></div> <div class=game-color-match-2-reload> <div class=game-color-match-2-reload__inner> <h3 class=game-color-match-2-reload__task-text ng-bind-html="\'game.title\'|translate"> </h3> <div class=game-color-match-2-reload__cards> <div ng-repeat="column in gameState.columns" class=game-color-match-2-reload__card-wrap> <h5 class=game-color-match-2-reload__card-title> {{ column.title|translate|capitalize }} </h5> <div ng-if=gameState.init ng-repeat="item in column.items" class=game-color-match-2-reload__card ng-class="{\'game-color-match-2-reload__card--rotate\':gameState.answer}"> <span ng-if=!gameState.answer class=game-color-match-2-reload__card-value ng-style="{\'color\':item.value}"> {{ item.nameTitle|translate|capitalize }} </span> </div> </div> </div> </div> </div> <wg-answer-result></wg-answer-result> </div> '},tzQp:function(e,a){e.exports=Phaser}},["0lNA"]);