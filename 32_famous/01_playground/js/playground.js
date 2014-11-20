'use strict';

angular.module('playground',
	['ngAnimate', 'ngCookies',
		'ngTouch', 'ngSanitize',
		'ngResource', 'ui.router',
		'famous.angular' ])
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
