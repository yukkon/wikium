webpackJsonp([58],{"0pWk":function(t,e){},"8v5g":function(t,e){t.exports=PIXI},HWZb:function(t,e){t.exports=p2},i2w9:function(t,e,n){"use strict";n("8S8A"),n("0pWk"),n("/jXN").module("wgGame",["wgCore"]).constant("gameName","findletter").config(["$stateProvider",function(t){t.state("game",{views:{pages:{templateUrl:"game-container.html"},"container@game":{template:'<div ng-controller="GameCtrl"></div>'}}})}]).run(["$state",function(t){t.go("loading")}]).config(["$stateProvider",function(t){t.state("game-training",{views:{pages:{template:"<div></div>",controller:["wgNewGame","wgSound",function(t,e){t.then(function(t){return t.startTraining(e.getEnabled())})}]}}})}])},tzQp:function(t,e){t.exports=Phaser}},["i2w9"]);