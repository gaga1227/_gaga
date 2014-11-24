angular.module('playground',
	[
		'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource',
		'ui.router', 'ui.ace',
		'pasvaz.bindonce'
	])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'partials/pattern.html',
				controller: 'PatternCtrl'
			})
			.state('jade', {
				url: '/jade',
				templateUrl: 'partials/jade.html',
				controller: 'MainCtrl'
			});
		$urlRouterProvider.otherwise('/');
	})
;
