webpackJsonp([42],{"1gb7":function(t,e,n){"use strict";n("8S8A"),n("URuV"),n("/jXN").module("wgGame",["wgCore"]).constant("gameName","writer").config(["$stateProvider",function(t){t.state("game",{views:{pages:{templateUrl:"game-container.html"},"container@game":{template:'<div ng-controller="GameCtrl"></div>'}}})}]).run(["$state",function(t){t.go("loading")}]).config(["$stateProvider",function(t){t.state("game-training",{views:{pages:{template:"<div></div>",controller:["wgNewGame","wgSound",function(t,e){t.then(function(t){return t.startTraining(e.getEnabled())})}]}}})}])},"8v5g":function(t,e){t.exports=PIXI},HWZb:function(t,e){t.exports=p2},URuV:function(t,e){},tzQp:function(t,e){t.exports=Phaser}},["1gb7"]);