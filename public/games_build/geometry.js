webpackJsonp([2],{"26Oe":function(e,t,a){e.exports=a.p+"images/e87ac969aa06619095305f22663a3f32.svg"},"3aMs":function(e,t,a){"use strict";angular.module("wgGame").run(["$state",function(e){e.go("loading")}])},"8v5g":function(e,t){e.exports=PIXI},"9veO":function(e,t,a){e.exports=a.p+"images/66fea850bddcacbff40606156359a9be.svg"},HUD2:function(e,t,a){e.exports=a.p+"images/41cdceee0f86f7da744cf601def5230c.svg"},HWZb:function(e,t){e.exports=p2},"Hd/F":function(e,t,a){e.exports=a.p+"images/78a19f26abb70ca94693cad04c44beb4.svg"},HiBo:function(e,t,a){e.exports=a.p+"images/e21be5427fa05584b6ceda07d364ca2a.svg"},IXLP:function(e,t,a){"use strict";var s,i;s=[a("/jXN")],void 0!==(i=function(e){function t(e,t,a,s,i){function n(e){t.answer(a.mapKeyToAnswer(e.keyCode))}var o=0;t.gameState=a.buildInitialGameState(),t.answer=function(s){s===t.mapGameStateToAnswer()&&(o++,o>2?e.go("game"):a.buildGameState())},i.on("keydown",n),t.mapGameStateToAnswer=function(){return a.mapGameStateToAnswer()},t.$on("$destroy",function(){i.off("keydown",n)}),s(function(){a.buildGameState(!0)},0)}e.module("wgGame").config(["$stateProvider",function(e){e.state("game-training",{views:{pages:{template:a("amvU"),controller:["$state","$scope","MatchGameStrategy","$timeout","$document",t]}}})}])}.apply(t,s))&&(e.exports=i)},JLos:function(e,t,a){e.exports=a.p+"images/18a3789fcae3507e4735fb40864d14a7.svg"},SQPe:function(e,t,a){e.exports=a.p+"images/7044fd38355a52aa55054a062d01be35.svg"},W5aK:function(e,t){e.exports='<div ng-controller=GameCtrl class="game-screen game-screen--geometry"> <wg-menu></wg-menu> <wg-answer-result></wg-answer-result> <div ui-view=stages></div> <div class=geometry> <div class=geometry__inner> <h3 class=geometry__task-text ng-show=gameState.target.isSum ng-bind-html="\'game.plus\'|translate|capitalize"></h3> <h3 class=geometry__task-text ng-show=!gameState.target.isSum ng-bind-html="\'game.minus\'|translate|capitalize"></h3> <div class=geometry__main> <div class=geometry__task ng-class="{\'geometry__task--active\': gameState.answer}"> <div class=geometry__operand> <div class="card operand choice" wg-embed-svg="{{ gameState.target.firstImage }}"></div> </div> <div class=geometry__operation> <svg ng-if=gameState.target.isSum width=16 height=15> <use xlink:href=/games_build/images/icons/geometry-symbols.svg#operation-addition /> </svg> <svg ng-if=!gameState.target.isSum width=16 height=15> <use xlink:href=/games_build/images/icons/geometry-symbols.svg#operation-subtraction /> </svg> </div> <div class=geometry__operand> <div class="card operand choice" wg-embed-svg="{{ gameState.target.secondImage }}"></div> </div> <div class=geometry__operation> <svg width=16 height=14> <use xlink:href=/games_build/images/icons/geometry-symbols.svg#operation-equal /> </svg> </div> <div class=geometry__result> <svg width=24 height=32> <use xlink:href=/games_build/images/icons/geometry-symbols.svg#result /> </svg> </div> </div> <div class=geometry__items> <button class="geometry__item choice {{ choice.class }}" ng-repeat="choice in gameState.choices track by $id(choice)" ng-click=answer(choice) ng-class="{\'geometry__item--disabled\': choice.isEmpty }" ng-disabled=gameState.isEmpty> <div ng-if=!gameState.isEmpty ng-switch=choice.operation> <div ng-switch-when=+ class=sum> <span wg-embed-svg="{{ choice.firstImage }}"></span> <span wg-embed-svg="{{ choice.secondImage }}"></span> </div> <div ng-switch-when=-> <span wg-embed-svg="{{ choice.firstImage }}" wg-subtract-svg="{{ choice.secondImage }}"></span> </div> </div> </button> </div> </div> </div> </div> </div> '},Wp0x:function(e,t,a){e.exports=a.p+"images/1af977413465e3ac7016c775e139f327.svg"},Z0vw:function(e,t,a){e.exports=a.p+"images/46559fa2736e0cc582d8c0f376339b0a.svg"},amvU:function(e,t){e.exports='<div class="game-screen game-screen--geometry" ng-if=gameState.init> <div class=geometry> <div class=geometry__inner> <h3 class=geometry__task-text ng-show=gameState.target.isSum ng-bind-html="\'game.plus\'|translate|capitalize"></h3> <h3 class=geometry__task-text ng-show=!gameState.target.isSum ng-bind-html="\'game.minus\'|translate|capitalize"></h3> <div class=geometry__main> <div class=geometry__task ng-class="{\'geometry__task--active\': gameState.answer}"> <div class=geometry__operand> <div class="card operand choice" wg-embed-svg="{{ gameState.target.firstImage }}"></div> </div> <div class=geometry__operation> <svg ng-if=gameState.target.isSum width=16 height=15> <use xlink:href=/games_build/images/icons/geometry-symbols.svg#operation-addition /> </svg> <svg ng-if=!gameState.target.isSum width=16 height=15> <use xlink:href=/games_build/images/icons/geometry-symbols.svg#operation-subtraction /> </svg> </div> <div class=geometry__operand> <div class="card operand choice" wg-embed-svg="{{ gameState.target.secondImage }}"></div> </div> <div class=geometry__operation> <svg width=16 height=14> <use xlink:href=/games_build/images/icons/geometry-symbols.svg#operation-equal /> </svg> </div> <div class=geometry__result> <svg width=24 height=32> <use xlink:href=/games_build/images/icons/geometry-symbols.svg#result /> </svg> </div> </div> <div class=geometry__items> <button class="geometry__item choice {{ choice.class }}" ng-repeat="choice in gameState.choices track by $id(choice)" ng-click=answer(choice) ng-class="{\'game-answer-hint\': gameState.target == choice, \'geometry__item--disabled\': choice.isEmpty }" ng-disabled=gameState.isEmpty> <div ng-if=!gameState.isEmpty ng-switch=choice.operation> <div ng-switch-when=+ class=sum> <span wg-embed-svg="{{ choice.firstImage }}"></span> <span wg-embed-svg="{{ choice.secondImage }}"></span> </div> <div ng-switch-when=-> <span wg-embed-svg="{{ choice.firstImage }}" wg-subtract-svg="{{ choice.secondImage }}"></span> </div> </div> </button> </div> </div> </div> </div> </div> '},"d+8w":function(e,t,a){function s(e){return a(i(e))}function i(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var n={"./bg-pencil.svg":"JLos","./bg-wood.svg":"SQPe","./card0.svg":"oh8f","./card1.svg":"Wp0x","./card2.svg":"Hd/F","./card3.svg":"HiBo","./card4.svg":"iWpQ","./icons/geometry-symbols.svg":"HUD2","./operation-addition.svg":"Z0vw","./operation-equal.svg":"mjgk","./operation-subtraction.svg":"26Oe","./result.svg":"9veO"};s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="d+8w"},gSSi:function(e,t,a){"use strict";a("w8f2"),a("mAYW"),a("oC28"),a("pRCW"),a("vXKT"),a("3aMs"),a("IXLP")},iWpQ:function(e,t,a){e.exports=a.p+"images/11081a0fda642566dfbb7df890792a46.svg"},mAYW:function(e,t,a){"use strict";angular.module("wgGame").config(["$stateProvider",function(e){e.state("game",{views:{pages:{templateUrl:"game-container.html"},"container@game":{template:a("W5aK")}}})}])},mjgk:function(e,t,a){e.exports=a.p+"images/bc6a7a496970fe28da32d5d4be088b2f.svg"},oC28:function(e,t,a){"use strict";var s=a("fZjL"),i=function(e){return e&&e.__esModule?e:{default:e}}(s);angular.module("wgGame").service("MatchGameStrategy",["wgBonuses","wgGameOverOnTime","wgProperties","wgWaitSeconds","$q",function(e,t,s,n,o){function g(){var e=v.getProperty("strategy.numberOfChoices"),t=r().shuffle().take(e);m.target=t.random(),m.choices=_.concat(t,_.range(9-e).map(function(){return{isEmpty:!0}})),void 0===u[m.target.operation]&&(u[m.target.operation]=1,m.target.operationIsNew=!0)}function r(){var e=v.getProperty("strategy.availableOperations"),t=v.getProperty("strategy.availableImages"),s=(0,i.default)(t),n=[];return s.forEach(function(s){e.forEach(function(e){c(t[s],e).forEach(function(t){n.push({firstImage:a("d+8w")("./"+s),secondImage:a("d+8w")("./"+t),operation:e,isSum:"+"===e})})})}),n}function c(e,t){return e.operate["on_"+t]}var m,d,v=s.build(),u={"+":!0};this.buildInitialGameState=function(){return m={init:!1,answer:!1,currentAnswer:0}},this.buildGameState=function(e){d&&d.resolve();var t=void 0;return t=e?null:m.init?0:.6,d=o.defer(),m.answer=!0,g(),n(t)().then(function(){return m.init=!0,m.answer=!1,m})},this.isOver=function(){return!d.promise||d.promise},this.mapGameStateToAnswer=function(){return m.target},this.handleAnswerResult=function(e,t){return e?(d.resolve(),!0):(angular.forEach(t.choices,function(e){e===t.target&&(e.class="show-as-hidden")}),n(v.getProperty("timing.delayBeforeHideTiles"))().then(d.resolve))},this.mapKeyToAnswer=function(e){if(48<=e&&e<=57)return e-48}}])},oh8f:function(e,t,a){e.exports=a.p+"images/d7a25837aa418780650d6a5a0d979aaa.svg"},tzQp:function(e,t){e.exports=Phaser},vXKT:function(e,t){},w8f2:function(e,t,a){"use strict";a("/jXN").module("wgGame",["wgCore"]).constant("gameName","geometry")}},["gSSi"]);