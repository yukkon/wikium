webpackJsonp([25], {
    "2YXM": function(e, t, i) {
        "use strict";
        angular.module("wgGame").service("MatchGameStrategy", ["wgProperties", "wgWaitSeconds", "$timeout", "$q", "$rootScope", function(e, t, i, n, a) {
            function r() {
                var e = o();
                f.matrix = s(e.n, e.m)
            }
            function s(e, t) {
                for (var i = [], n = 0; n < t; n++) {
                    for (var a = [], r = 0; r < e; r++) {
                        var s = {
                            x: r,
                            y: n,
                            enabled: !1,
                            class: "",
                            hidden: !1,
                            open: !1
                        };
                        a.push(s)
                    }
                    i.push(a)
                }
                return new g(e,t,i)
            }
            function o() {
                var e = x.getProperty("matrix") || {
                    n: 2,
                    m: 2,
                    hidden: 2
                };
                return a.isMobile && (e = {
                    n: e.m,
                    m: e.n,
                    hidden: e.hidden
                }),
                e
            }
            function m() {
                var e = o()
                  , t = e.hidden
                  , i = e.n
                  , n = e.m;
                for (h = t; t > 0; ) {
                    var a = Math.floor(Math.random() * i)
                      , r = Math.floor(Math.random() * n)
                      , s = f.matrix.getTile(a, r);
                    s.hidden || (s.hidden = !0,
                    t--)
                }
            }
            function c() {
                f.init = !0,
                f.answer = !1,
                f.matrix.forEachTile(function(e) {
                    e.hidden && (e.class = "is-active")
                })
            }
            function l() {
                f.matrix.forEachTile(function(e) {
                    e.class = ""
                })
            }
            function u() {
                f.matrix.forEachTile(function(e) {
                    e.enabled = !0
                })
            }
            function d() {
                f.matrix.forEachTile(function(e) {
                    e.hidden && !e.open && (e.class = "is-success")
                })
            }
            function g(e, t, i) {
                this.n = e,
                this.m = t,
                this.tiles = i
            }
            var f, h, v, x = e.build();
            this.buildInitialGameState = function() {
                return f = {
                    matrix: null,
                    answer: !1,
                    init: !1
                }
            }
            ,
            this.buildGameState = function() {
                return v = n.defer(),
                f.answer = f.init,
                t(f.init ? .4 : 0)().then(function() {
                    return r()
                }).then(t(1)).then(m).then(c).then(t(x.getProperty("timing.delayBeforeHideTiles"))).then(l).then(u)
            }
            ,
            this.handleAnswer = function(e) {
                --h,
                e.enabled = !1,
                e.open = !0;
                var t = e.hidden;
                return e.class = t ? "is-success" : "is-fail",
                "ie" === a.browser.name && i(function() {
                    return e.style = {
                        "z-index": "999999"
                    }
                }, 10),
                t
            }
            ,
            this.isReadyForNextState = function() {
                return h <= 0
            }
            ,
            this.destroyGameState = function() {
                return d(),
                t(1)().then(function() {
                    v.resolve()
                })
            }
            ,
            this.isOver = function() {
                return !v.promise || v.promise
            }
            ,
            g.prototype.forEachTile = function(e) {
                for (var t = 0; t < this.m; t++)
                    for (var i = 0; i < this.n; i++)
                        e(this.tiles[t][i])
            }
            ,
            g.prototype.getTile = function(e, t) {
                if (e >= this.x)
                    throw new Error("x out of range");
                if (t >= this.y)
                    throw new Error("y out of range");
                return this.tiles[t][e]
            }
        }
        ])
    },
    "8v5g": function(e, t) {
        e.exports = PIXI
    },
    "98ig": function(e, t, i) {
        "use strict";
        i("d/6G"),
        i("nreA"),
        i("2YXM"),
        i("6Tig"),
        i("fc/o"),
        i("DDJM"),
        i("mhy1")
    },
    DDJM: function(e, t, i) {
        "use strict";
        angular.module("wgGame").run(["$state", function(e) {
            e.go("firstGameIframe" == window.name ? "screenFive" : "loading")
        }
        ])
    },
    HWZb: function(e, t) {
        e.exports = p2
    },
    "d/6G": function(e, t, i) {
        "use strict";
        i("/jXN").module("wgGame", ["wgCore"]).constant("gameName", "memory-matrix")
    },
    "fc/o": function(e, t) {},
    mhy1: function(e, t, i) {
        "use strict";
        var n, a;
        n = [i("/jXN")],
        void 0 !== (a = function(e) {
            function t(e, t, i, n, a) {
                var r = 0;
                t.gameState = i.buildInitialGameState(),
                t.answer = function(t) {
                    i.handleAnswer(t),
                    i.isReadyForNextState() && (r++,
                    r > 2 ? e.go("game") : i.destroyGameState().then(function() {
                        return i.buildGameState()
                    }))
                }
                ,
                n(function() {
                    i.buildGameState()
                }, 0)
            }
            e.module("wgGame").config(["$stateProvider", function(e) {
                e.state("game-training", {
                    views: {
                        pages: {
                            template: i("vfIk"),
                            controller: ["$state", "$scope", "MatchGameStrategy", "$timeout", "$document", t]
                        }
                    }
                })
            }
            ])
        }
        .apply(t, n)) && (e.exports = a)
    },
    nreA: function(e, t, i) {
        "use strict";
        angular.module("wgGame").config(["$stateProvider", function(e) {
            e.state("game", {
                views: {
                    pages: {
                        templateUrl: "game-container.html"
                    },
                    "container@game": {
                        template: i("qR/N")
                    }
                }
            })
        }
        ])
    },
    "qR/N": function(e, t) {
        e.exports = '<div ng-controller=GameCtrl class="game-screen game-screen--memory-matrix"> <div class="game-screen game-screen--memory-matrix"> <div class=memory-matrix ng-class="{\'game-change-screen\': gameState.answer, \'game-state-init\': !gameState.init}"> <div class="memory-matrix__inner memory-matrix__inner--{{ gameState.matrix.n }}"> <div class=memory-matrix__row ng-repeat="line in gameState.matrix.tiles"> <div class=memory-matrix__cell ng-click="tile.enabled ? answer(tile) : null" ng-class="tile.class + (tile.enabled ? \' ie-fix-rotate\' : \'\')" ng-style=tile.style ng-repeat="tile in line"> <div class=memory-matrix__cell-rotate></div> </div> </div> </div> </div> </div> <wg-menu></wg-menu> <wg-answer-result></wg-answer-result> <div ui-view=stages></div> </div> '
    },
    tzQp: function(e, t) {
        e.exports = Phaser
    },
    vfIk: function(e, t) {
        e.exports = '<div class="game-screen game-screen--memory-matrix"> <div class=memory-matrix ng-class="{\'game-change-screen\': gameState.answer, \'game-state-init\': !gameState.init}"> <h5 class=memory-matrix__instruction ng-bind-html="\'game.title\'|translate"></h5> <div class="memory-matrix__inner memory-matrix__inner--{{ gameState.matrix.n }}"> <div class=memory-matrix__row ng-repeat="line in gameState.matrix.tiles"> <div class=memory-matrix__cell ng-click="tile.enabled ? answer(tile) : null" ng-class="tile.class + (tile.hidden && tile.enabled ? \' game-answer-hint\' : \'\')" ng-repeat="tile in line"> <div class=memory-matrix__cell-rotate></div> </div> </div> </div> </div> </div> '
    }
}, ["98ig"]);
