'use strict';

angular.module('playground')
.controller('PatternCtrl', ['$scope', '$famous', '$sce', function($scope, $famous, $sce) {
	//repo data
	// $scope.repo = {
	// 	"id": "OB20",
	// 	"name": "Sportsbet Desktop OB20",
	// 	"path": "repo/sbt/ob20/",
	// 	"css": [
	// 		{ "path": "css/default/", "filename": "font-icons" },
	// 		{ "path": "css/default/", "filename": "base" },
	// 		{ "path": "css/default/", "filename": "all" }
	// 	]
	// };
	//repo data
	$scope.repo = {
		"id": "BS331",
		"name": "Bootstrap 3.3.1",
		"path": "repo/bs/",
		"css": [
			{ "path": "css/", "filename": "bootstrap" },
			{ "path": "css/", "filename": "bootstrap-theme" }
		],
		"js": [
			{ "path": "js/", "filename": "bootstrap" }
		]
	};

	//pattern data
	// $scope.pattern = {
	// 	"id": "OB20-001",
	// 	"title": "My First Pattern",
	// 	"author": "JohnnyX",
	// 	"jade": "",
	// 	"html": "<div data-panel=\"\"><div class=\"panel__header\"><h3>Multipick (OB20-1)<br> Lead Dev: JX<\/h3><\/div><div class=\"panel__body\"><ol data-ol=\"\"><li><a href=\"OB20-01-multipick.html\" data-icon=\"correct\">OB20-01-multipick<\/a><\/li><\/ol><\/div><div class=\"panel__footer\"><a href=\"https://jira.openbet.com/browse/SBT-20524\" target=\"_blank\">PID<\/a><a href=\"https://wiki.sbetcorp.com.au/confluence/pages/viewpage.action?title=095+MultiPick+Sports&amp;spaceKey=DRUXTEAM\" target=\"_blank\">Design<\/a><a href=\"https://wiki.sbetcorp.com.au/confluence/display/DESKPROD/Sports+Multipick+SoW\" target=\"_blank\">SOW<\/a><a href=\"https://jira.sportsbet.com.au/browse/OBTWENTY-1\" target=\"_blank\">EPIC<\/a><\/div><\/div>"
	// };
	$scope.pattern = {
		"id": "BS-001",
		"title": "My First Pattern",
		"author": "JohnnyX",
		"jade": "",
		"html": "<h1>Hello Pattern! <small>Secondary text<\/small><\/h1><p class=\"lead\">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.<\/p><p><button type=\"button\" class=\"btn btn-primary btn-lg\">Yes<\/button> <button type=\"button\" class=\"btn btn-default btn-lg\">No<\/button><\/p>"
	};

	//inputs
	$scope.pattern.input = $scope.pattern.html;
	$scope.$watch('pattern.input', function(){
		$scope.pattern.safeInput = $sce.trustAsHtml($scope.pattern.input);
	});
}]);
