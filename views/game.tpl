<!DOCTYPE html>
<html ng-app="wgGame" lang="ru" ng-controller="wgTitleCtrl" xmlns:ng="http://angularjs.org">
  <head>
    <title>Webpack App</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      .game-loader {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 99999;
        background-color: #fff;
        top: 0;
        left: 0;
      }
      .game-loader.ng-enter {
        transition: .3s;
        opacity: 0;
      }
      .game-loader.ng-enter.ng-enter-active {
        opacity: 1;
      }
      .game-loader.ng-leave {
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
    </style>
    <link href="/games_build/vendor.css" rel="stylesheet">
    <link href="/games_build/{{game}}.css" rel="stylesheet">
  </head>
  <body>
    <wg-game-pages ng-hide="$root.loader"></wg-game-pages>
    <div class="game-loader ng-cloak" ng-if="$root.loader">
      <svg class="game-loader__preloader" width='196px' height='196px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring-alt">
        <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
        <circle cx="50" cy="50" r="40" stroke="#f1f0f9" fill="none" stroke-width="10" stroke-linecap="round"></circle>
        <circle cx="50" cy="50" r="40" stroke="#6039AA" fill="none" stroke-width="6" stroke-linecap="round">
          <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate>
          <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate>
        </circle>
      </svg>
    </div>
    <script type="text/javascript" src="/games_build/vendor.js"></script>
    <script type="text/javascript" src="/games_build/{{game}}.js"></script>
  </body>
</html>
