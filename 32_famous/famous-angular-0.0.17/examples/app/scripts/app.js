angular.module('integrationApp',['famous.angular', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/lock-screen");
    $stateProvider
      .state("lock-screen", {
        url: "/lock-screen",
        templateUrl: "views/lock-screen.html"
      })
      .state("animate", {
        url: "/animate",
        templateUrl: "views/animate.html",
        controller: "AnimateCtrl"
      })
      .state("animations", {
        url: "/animations",
        templateUrl: "views/animations.html",
        controller: "AnimationsCtrl"
      })
      .state("transitionables", {
        url: "/transitionables",
        templateUrl: "views/transitionables.html",
        controller: "TransitionablesCtrl"
      })
      .state("demo", {
        url: "/demo",
        templateUrl: "views/demo.html"
      })
      .state("ng-class", {
        url: "/ng-class",
        templateUrl: "views/ng-class.html",
        controller: "NgClassCtrl"
      }) 
      .state("render-node", {
        url: "/render-node",
        templateUrl: "views/render-node.html",
        controller: "RenderNodeCtrl"
      }) 
      .state("header-footer-layout", {
        url: "/header-footer-layout",
        templateUrl: "views/header-footer-layout.html",
        controller: "HeaderFooterLayoutCtrl"
      }) 
      .state("flexible-layout", {
        url: "/flexible-layout",
        templateUrl: "views/flexible-layout.html",
        controller: "FlexibleLayoutCtrl"
      }) 
      .state("flipper", {
        url: "/flipper",
        templateUrl: "views/flipper.html",
        controller: "FlipperCtrl"
      });
    });