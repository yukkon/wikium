<!DOCTYPE html>
<html ng-app="wgGame" lang="ru" ng-controller="wgTitleCtrl" xmlns:ng="http://angularjs.org">

<head>
    <title>
        Webpack App
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .game-loader,
        .game-connection-error {
            position: absolute;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 100%;
            height: 100%;
            z-index: 99999;
            background-color: #fff;
            top: 0;
            left: 0;
        }

        .game-loader__progress {
            position: absolute;
            display: none;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            color: #6039aa;
            font-size: 14px;
            line-height: 19px;
            font-weight: 600;
        }

        .game-loader.ng-enter {
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
            opacity: 0;
        }

        .game-loader.ng-enter.ng-enter-active {
            opacity: 1;
        }

        .game-loader.ng-leave {
            -webkit-transition: .3s;
            -o-transition: .3s;
            transition: .3s;
            opacity: 1;
        }

        .game-loader.ng-leave.ng-leave-active {
            opacity: 0;
        }

        .game-loader__preloader {
            display: block;
            width: 100px;
        }

        .game-connection-error {
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
        }

        .game-connection-error__content {
            text-align: center;
            padding: 8px 20px;
        }

        .game-connection-error__video {
            width: 300px;
            height: 250px;
            margin-bottom: 34px;
        }

        .game-connection-error__text {
            max-width: 510px;
            color: #999;
            margin-left: auto;
            margin-right: auto;
        }

        @media (max-width: 631px) {
            .game-connection-error__video {
                width: 120px;
                height: auto;
                margin-bottom: 24px;
            }
        }
    </style>
    <link href="/games_build/vendor.css" rel="stylesheet">
    <link href="/games_build/{{game}}.css" rel="stylesheet">
  </head>

  <body>
    <wg-game-pages></wg-game-pages>
    <div ng-if="$root.loader">
        <div class="game-loader ng-cloak">
            <div class="game-loader__progress" ng-style="$root.loaderProgress >= 0 && {display: 'initial'}">
                <span>{{$root.loaderProgress}}</span>%
            </div>
            <svg class="game-loader__preloader" width='196px' height='196px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring-alt">
                <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                <circle cx="50" cy="50" r="40" stroke="#f1f0f9" fill="none" stroke-width="10" stroke-linecap="round"></circle>
                <circle cx="50" cy="50" r="40" stroke="#6039AA" fill="none" stroke-width="6" stroke-linecap="round">
                    <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate>
                    <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate>
                </circle>
            </svg>
        </div>
        <div class="game-connection-error ng-cloak" style="display:none" ng-style="$root.loaderSlowConnection && {display: 'initial'}">
            <div class="game-connection-error__content">
                <video class="game-connection-error__video" loop muted autoplay playsinline>
                    <source src="./images/slow-connection.webm" type="video/webm">
                    <source src="./images/slow-connection.mp4" type="video/mp4">
                </video>
                <p class="game-connection-error__text" translate="game.slow_connection"></p>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="/games_build/polyfill.js?v=6.26.0"></script>
    <script type="text/javascript" src="/games_build/phaser.js?v=2.11.0"></script>
    <script type="text/javascript" src="/games_build/vendor.js"></script>
    <script type="text/javascript" src="/games_build/{{game}}.js"></script>
  </body>
</html>