webpackJsonp([12],{"3XFC":function(e,t,i){"use strict";angular.module("wgGame").service("MatchGameStrategy",["$rootScope","$timeout","wgRequestAnimationFrame","wgWaitSeconds","$q",function(e,t,i,s,a){function l(){return _.range(10).map(function(e){return{style:{bottom:50-100*Math.random()+"%",left:10*e+"%"}}})}function r(){var e=Date.now(),t=e-u;_.each(n.boats,function(e){return c(e,t)}),i(r),u=e}function c(e,t){function i(e){var t=d?0:-20,i=d?70:100;return e<t?i:e>i?t:e}var s=m[f.indexOf(n.moving)],a=e.position.top,l=e.position.left;l=i(l),a=i(a),e.position.left=l+.02*s[0]*t,e.position.top=a+.02*s[1]*t}var n,o=5,f=["up","right","down","left"],m=[[0,-1],[1,0],[0,1],[-1,0]],u=Date.now(),w=e.browser.name,d="ie"===w||"edge"===w;e.$on("show-answer-is-right",function(){n.answerClass="yellow-submarine--success",t(function(){n.answerClass=null},200)}),e.$on("show-answer-is-wrong",function(){n.answerClass="yellow-submarine--error",t(function(){n.answerClass=null},200)}),this.buildInitialGameState=function(){function e(e){return{top:20+e%2*40,left:e*(100/o)}}var t=_.range(o).map(function(t){return{position:e(t)}});return n={isPointToQuestion:!0,moving:f[0],pointTo:f[0],boats:t,currentAnswer:"",bubbles:l(),answer:!1,boatClass:function(){return(n.isPointToQuestion?"yellow-submarine__icon--yellow":"yellow-submarine__icon--red")+" yellow-submarine__icon--"+n.pointTo},init:!1},r(),n},this.buildGameState=function(){var e,i=Math.randomBoolean(),s=_.sample(f),l=_.sample(f);return n.init||(e=t(0)),a.when(e).then(function(){return n.init=!0,n.pointTo=l,n.moving=s,n.isPointToQuestion=i,n.currentAnswer=i?l:s,n})},this.mapGameStateToAnswer=function(){return n.currentAnswer},this.mapKeyToAnswer=function(e){switch(e){case 38:return f[0];case 40:return f[2];case 39:return f[1];case 37:return f[3]}}}])},"8v5g":function(e,t){e.exports=PIXI},AglL:function(e,t,i){"use strict";var s,a;s=[i("/jXN")],void 0!==(a=function(e){function t(e,t,i,s,a){var l=0;t.gameState=i.buildInitialGameState(),t.answer=function(a){a===t.mapGameStateToAnswer()&&(t.gameState.answerClass="yellow-submarine--success",s(function(){t.gameState.answerClass=null},200),l++,l>2?e.go("game"):s(function(){i.buildGameState()},300))},t.$on("keydown",function(e,s){t.answer(i.mapKeyToAnswer(s))}),t.mapGameStateToAnswer=function(){return i.mapGameStateToAnswer()},s(function(){i.buildGameState()},0)}e.module("wgGame").config(["$stateProvider",function(e){e.state("game-training",{views:{pages:{template:i("ycgb"),controller:["$state","$scope","MatchGameStrategy","$timeout","$document",t]}}})}])}.apply(t,s))&&(e.exports=a)},HWZb:function(e,t){e.exports=p2},"TvO/":function(e,t){},iV89:function(e,t,i){"use strict";i("pM5E"),i("zY2r"),i("3XFC"),i("pRCW"),i("TvO/"),i("un5+"),i("AglL")},pM5E:function(e,t,i){"use strict";i("/jXN").module("wgGame",["hmTouchEvents","wgCore"]).constant("gameName","yellow-submarine").constant("imgsUrl","imgs/")},tzQp:function(e,t){e.exports=Phaser},uXDM:function(e,t){e.exports='<div ng-controller=GameCtrl class="game-screen game-screen--submarines"> <wg-menu></wg-menu> <wg-answer-result></wg-answer-result> <wg-game-answer-arrow-full on-click=answer(click) ng-if=!$root.isMobile ng-show="$root.countDown.left == 0"></wg-game-answer-arrow-full> <div ui-view=stages></div> <div class=yellow-submarine hm-options="{swipe: true}" hm-swipeup="answer(\'up\')" hm-swipeleft="answer(\'left\')" hm-swiperight="answer(\'right\')" hm-swipedown="answer(\'down\')" ng-if=gameState.boats> <div class=yellow-submarine__wave></div> <div class=yellow-submarine__bubble> <svg viewBox="0 0 19.15 16.94" width=20 height=17> <path fill=#fff opacity=0.45 d=M10,0C5.29,0,.25,3.7,0,8.65s4.46,8.29,9.12,8.29,9.77-3.7,10-8.65S14.67,0,10,0Z /> </svg> </div> <div class=yellow-submarine__fish-stocks> <div class="yellow-submarine__fish-stock yellow-submarine__fish-stock--1"></div> <div class="yellow-submarine__fish-stock yellow-submarine__fish-stock--2"></div> <div class="yellow-submarine__fish-stock yellow-submarine__fish-stock--3"></div> <div class="yellow-submarine__fish-stock yellow-submarine__fish-stock--4"></div> <div class="yellow-submarine__fish-stock yellow-submarine__fish-stock--5"></div> </div> <div class=yellow-submarine ng-class=gameState.answerClass ng-if=gameState.init> <div class="game-screen__instruction yellow-submarine__instruction"> <span class=yellow-submarine__tab ng-class="{\'yellow-submarine__tab--is-active-red\': !gameState.isPointToQuestion}"> {{ \'game.move\'|translate|capitalize }}</span> <span class=yellow-submarine__tab ng-class="{\'yellow-submarine__tab--is-active-yellow\': gameState.isPointToQuestion}"> {{ \'game.denote\'|translate|capitalize }}</span> </div> <div class=yellow-submarine__wrap> <div ng-repeat="boat in gameState.boats" ng-style="{transform: \'translate(\' + boat.position.left + \'vw,\' + boat.position.top + \'vh)\' }" class=yellow-submarine__boat> <div class=yellow-submarine__icon ng-class=gameState.boatClass()> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 108 70"> <g class=circuit> <path fill=#fff d="M100 47.72s-1.2-9-5.31-12.76c-3.32-3-13.76-7.91-41.91-9.08C23.68 24.66 0 35.66 0 47.72s23.66 21.75 52.84 21.75"/> <path fill=#fff d="M100 47.63s-1.2 9-5.31 12.76c-3.32 3-13.76 7.91-41.91 9.08C23.68 70.69 0 59.69 0 47.63s23.66-21.84 52.84-21.84"/> <path fill=#fff d="M100.9 69.09a15.9 15.9 0 0 1-21.14-7.67l14.4-6.73z"/> <path fill=#fff d="M100.69 26.38A15.9 15.9 0 0 0 79.55 34L94 40.78zM108.55 60c-7.92 0-14.34-5.58-14.34-12.47s6.42-12.47 14.34-12.47M42.04 18.98h-8.16V0h8.16l4.05 9.49-4.05 9.49"/> <ellipse cx=49.94 cy=25.15 fill=#fff rx=10.54 ry=4.26 /> <ellipse cx=49.94 cy=27.48 fill=#fff rx=14.12 ry=5.7 /> <path fill=#fff d="M37.55 17.57a8 8 0 1 1 0-16.08"/> </g> <path fill=#71d3d3 d="M37.16 16a6.46 6.46 0 0 1 0-12.93"/> <g class=body> <path stroke=#fff stroke-width=2 stroke-miterlimit=10 d="M36.51 5.46h11.56a5.91 5.91 0 0 1 5.9 5.9v15.9l-8.23-3.38v-7.43a2.83 2.83 0 0 0-2.82-2.82h-6.81"/> <path d="M98.4 47.69s-1.16-8.17-5.12-11.59c-3.2-2.76-13.27-7.18-40.41-8.25-28.11-1.1-50.94 8.88-50.94 19.84s23.21 19.73 51.35 19.73"/> <path d="M98.4 47.6s-1.16 8.17-5.12 11.59c-3.2 2.76-13.27 7.18-40.41 8.25-28.11 1.1-50.94-8.89-50.94-19.84s22.81-19.83 50.95-19.83"/> <path d="M98.4 47.53s-1.16 8.17-5.12 11.59c-3.19 2.76-13.28 7.18-40.4 8.25-28.12 1.1-50.95-8.88-50.95-19.84"/> <path d="M39.8 1.5v16.27h1.22l3.45-8.14-3.45-8.13H39.8"/> <path d="M43 6.16h2.8v6.78H43z"/> <path d="M41.02 17.77H34.9V1.5h6.12l3.45 8.13-3.45 8.14m65.79 40.4a10.59 10.59 0 1 1 0-21.19m-8.56-9.65a10.59 10.59 0 0 0-14.08 5.11l9.6 4.49z"/> </g> <path fill=#fff d="M18.36 31.52h2.37v32.49h-2.37zm61.41-1.65h2.37v35.28h-2.37z"/> <g class=partial> <path d="M98.47 68.13A10.59 10.59 0 0 1 84.38 63L94 58.54z"/> <ellipse cx=49.94 cy=28.67 rx=13.54 ry=4.8 /> <path d="M46.43 18.51h6.86v1.03h-6.86zm0 2.06h6.86v1.03h-6.86z"/> </g> <ellipse class=body cx=49.94 cy=26.27 rx=10.15 ry=3.6 /> <g class=porthole> <circle cx=62.31 cy=47.53 r=7.2 fill=#71d3d3 stroke=#306d85 stroke-width=5 stroke-miterlimit=10 /> <circle cx=38.05 cy=47.53 r=7.2 fill=#71d3d3 stroke=#306d85 stroke-width=5 stroke-miterlimit=10 /> <circle cx=38.05 cy=40.33 r=.92 fill=#4c8f9e /> <circle cx=38.05 cy=54.74 r=.92 fill=#4c8f9e /> <circle cx=45.25 cy=47.5 r=.92 fill=#4c8f9e /> <circle cx=30.85 cy=47.5 r=.92 fill=#4c8f9e /> <circle cx=32.96 cy=42.44 r=.92 fill=#4c8f9e transform="rotate(-45 32.962 42.447)"/> <circle cx=43.14 cy=52.63 r=.92 fill=#4c8f9e transform="rotate(-45 43.14 52.63)"/> <circle cx=43.12 cy=42.42 r=.92 fill=#4c8f9e transform="rotate(-45 43.13 42.415)"/> <circle cx=32.94 cy=52.6 r=.92 fill=#4c8f9e transform="rotate(-45 32.94 52.606)"/> <circle cx=62.31 cy=40.33 r=.92 fill=#4c8f9e /> <circle cx=62.31 cy=54.74 r=.92 fill=#4c8f9e /> <circle cx=69.51 cy=47.5 r=.92 fill=#4c8f9e /> <circle cx=55.1 cy=47.5 r=.92 fill=#4c8f9e /> <circle cx=57.21 cy=42.44 r=.92 fill=#4c8f9e transform="rotate(-45 57.22 42.44)"/> <circle cx=67.4 cy=52.63 r=.92 fill=#4c8f9e transform="rotate(-45 67.397 52.623)"/> <circle cx=67.38 cy=42.42 r=.92 fill=#4c8f9e transform="rotate(-45 67.38 42.42)"/> <circle cx=57.19 cy=52.6 r=.92 fill=#4c8f9e transform="rotate(-45 57.192 52.61)"/> </g> </svg> </div> </div> </div> </div> </div> </div> '},"un5+":function(e,t,i){"use strict";angular.module("wgGame").run(["$state",function(e){e.go("firstGameIframe"==window.name?"screen11":"loading")}])},ycgb:function(e,t){e.exports='<div class="game-screen game-training game-screen--submarines"> <wg-game-answer-arrow-full ng-class="\'game-answer-\' + mapGameStateToAnswer()" on-click=answer(click)></wg-game-answer-arrow-full> <div class=yellow-submarine ng-class=gameState.answerClass hm-options="{swipe: true}" hm-swipeup="answer(\'up\')" hm-swipeleft="answer(\'left\')" hm-swiperight="answer(\'right\')" hm-swipedown="answer(\'down\')" ng-if=gameState.boats> <div class=yellow-submarine__bg-1></div> <div class=yellow-submarine__rays></div> <div ng-repeat="bubble in gameState.bubbles" ng-style=bubble.style class=yellow-submarine__bubble> <svg viewBox="0 0 19.15 16.94" width=20 height=17> <path fill=#fff opacity=0.45 d=M10,0C5.29,0,.25,3.7,0,8.65s4.46,8.29,9.12,8.29,9.77-3.7,10-8.65S14.67,0,10,0Z /> </svg> </div> <div class=yellow-submarine__inner ng-if=gameState.currentAnswer> <div class="game-screen__instruction yellow-submarine__instruction"> <span class=yellow-submarine__tab ng-class="{\'yellow-submarine__tab--is-active-red\': !gameState.isPointToQuestion}"> {{ \'game.move\'|translate|capitalize }}</span> <span class=yellow-submarine__tab ng-class="{\'yellow-submarine__tab--is-active-yellow\': gameState.isPointToQuestion}"> {{ \'game.denote\'|translate|capitalize }}</span> </div> <div class=yellow-submarine__wrap> <div ng-repeat="boat in gameState.boats" ng-style="{transform: \'translate(\' + boat.position.left + \'vw,\' + boat.position.top + \'vh)\' }" class=yellow-submarine__boat> <div class=yellow-submarine__icon ng-class=gameState.boatClass()> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 108 70"> <g class=circuit> <path fill=#fff d="M100 47.72s-1.2-9-5.31-12.76c-3.32-3-13.76-7.91-41.91-9.08C23.68 24.66 0 35.66 0 47.72s23.66 21.75 52.84 21.75"/> <path fill=#fff d="M100 47.63s-1.2 9-5.31 12.76c-3.32 3-13.76 7.91-41.91 9.08C23.68 70.69 0 59.69 0 47.63s23.66-21.84 52.84-21.84"/> <path fill=#fff d="M100.9 69.09a15.9 15.9 0 0 1-21.14-7.67l14.4-6.73z"/> <path fill=#fff d="M100.69 26.38A15.9 15.9 0 0 0 79.55 34L94 40.78zM108.55 60c-7.92 0-14.34-5.58-14.34-12.47s6.42-12.47 14.34-12.47M42.04 18.98h-8.16V0h8.16l4.05 9.49-4.05 9.49"/> <ellipse cx=49.94 cy=25.15 fill=#fff rx=10.54 ry=4.26 /> <ellipse cx=49.94 cy=27.48 fill=#fff rx=14.12 ry=5.7 /> <path fill=#fff d="M37.55 17.57a8 8 0 1 1 0-16.08"/> </g> <path fill=#71d3d3 d="M37.16 16a6.46 6.46 0 0 1 0-12.93"/> <g class=body> <path stroke=#fff stroke-width=2 stroke-miterlimit=10 d="M36.51 5.46h11.56a5.91 5.91 0 0 1 5.9 5.9v15.9l-8.23-3.38v-7.43a2.83 2.83 0 0 0-2.82-2.82h-6.81"/> <path d="M98.4 47.69s-1.16-8.17-5.12-11.59c-3.2-2.76-13.27-7.18-40.41-8.25-28.11-1.1-50.94 8.88-50.94 19.84s23.21 19.73 51.35 19.73"/> <path d="M98.4 47.6s-1.16 8.17-5.12 11.59c-3.2 2.76-13.27 7.18-40.41 8.25-28.11 1.1-50.94-8.89-50.94-19.84s22.81-19.83 50.95-19.83"/> <path d="M98.4 47.53s-1.16 8.17-5.12 11.59c-3.19 2.76-13.28 7.18-40.4 8.25-28.12 1.1-50.95-8.88-50.95-19.84"/> <path d="M39.8 1.5v16.27h1.22l3.45-8.14-3.45-8.13H39.8"/> <path d="M43 6.16h2.8v6.78H43z"/> <path d="M41.02 17.77H34.9V1.5h6.12l3.45 8.13-3.45 8.14m65.79 40.4a10.59 10.59 0 1 1 0-21.19m-8.56-9.65a10.59 10.59 0 0 0-14.08 5.11l9.6 4.49z"/> </g> <path fill=#fff d="M18.36 31.52h2.37v32.49h-2.37zm61.41-1.65h2.37v35.28h-2.37z"/> <g class=partial> <path d="M98.47 68.13A10.59 10.59 0 0 1 84.38 63L94 58.54z"/> <ellipse cx=49.94 cy=28.67 rx=13.54 ry=4.8 /> <path d="M46.43 18.51h6.86v1.03h-6.86zm0 2.06h6.86v1.03h-6.86z"/> </g> <ellipse class=body cx=49.94 cy=26.27 rx=10.15 ry=3.6 /> <g class=porthole> <circle cx=62.31 cy=47.53 r=7.2 fill=#71d3d3 stroke=#306d85 stroke-width=5 stroke-miterlimit=10 /> <circle cx=38.05 cy=47.53 r=7.2 fill=#71d3d3 stroke=#306d85 stroke-width=5 stroke-miterlimit=10 /> <circle cx=38.05 cy=40.33 r=.92 fill=#4c8f9e /> <circle cx=38.05 cy=54.74 r=.92 fill=#4c8f9e /> <circle cx=45.25 cy=47.5 r=.92 fill=#4c8f9e /> <circle cx=30.85 cy=47.5 r=.92 fill=#4c8f9e /> <circle cx=32.96 cy=42.44 r=.92 fill=#4c8f9e transform="rotate(-45 32.962 42.447)"/> <circle cx=43.14 cy=52.63 r=.92 fill=#4c8f9e transform="rotate(-45 43.14 52.63)"/> <circle cx=43.12 cy=42.42 r=.92 fill=#4c8f9e transform="rotate(-45 43.13 42.415)"/> <circle cx=32.94 cy=52.6 r=.92 fill=#4c8f9e transform="rotate(-45 32.94 52.606)"/> <circle cx=62.31 cy=40.33 r=.92 fill=#4c8f9e /> <circle cx=62.31 cy=54.74 r=.92 fill=#4c8f9e /> <circle cx=69.51 cy=47.5 r=.92 fill=#4c8f9e /> <circle cx=55.1 cy=47.5 r=.92 fill=#4c8f9e /> <circle cx=57.21 cy=42.44 r=.92 fill=#4c8f9e transform="rotate(-45 57.22 42.44)"/> <circle cx=67.4 cy=52.63 r=.92 fill=#4c8f9e transform="rotate(-45 67.397 52.623)"/> <circle cx=67.38 cy=42.42 r=.92 fill=#4c8f9e transform="rotate(-45 67.38 42.42)"/> <circle cx=57.19 cy=52.6 r=.92 fill=#4c8f9e transform="rotate(-45 57.192 52.61)"/> </g> </svg> </div> </div> </div> </div> </div> </div> '},zY2r:function(e,t,i){"use strict";angular.module("wgGame").config(["$stateProvider",function(e){e.state("game",{views:{pages:{templateUrl:"game-container.html"},"container@game":{template:i("uXDM")}}})}])}},["iV89"]);