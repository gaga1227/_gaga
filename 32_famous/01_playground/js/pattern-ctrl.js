angular.module('playground')
.controller('PatternCtrl', ['$scope', '$sce', function($scope, $sce) {

	// view model data
	// -------------------------------------------------------------------------------------------

	// repo data
	$scope.repo = {
		"id": "BS331",
		"name": "Bootstrap 3.3.1",
		"path": "repo/bs/",
		"css": [
			{ "path": "css/", "filename": "bootstrap" },
			{ "path": "css/", "filename": "bootstrap-theme" }
		]
	};

	// pattern data
	$scope.pattern = {
		"id": "BS-001",
		"title": "My First Pattern",
		"author": "JohnnyX",
		"jade": "",
		"html": "<h1>Hello Pattern! <small>Secondary text<\/small><\/h1><p class=\"lead\">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.<\/p><p><button type=\"button\" class=\"btn btn-primary btn-lg\">Yes<\/button> <button type=\"button\" class=\"btn btn-default btn-lg\">No<\/button><\/p>"
	};

	// ace editor
	// -------------------------------------------------------------------------------------------

	// on load
	$scope.aceLoaded = function(_editor) {
		//options
		_editor.setOptions({
			maxLines: 'Infinity',
			fontSize: '16px'
		});
	};
	// on change
	$scope.aceChanged = function(e) {
		console.log(e);
	};

	// inputs
	// -------------------------------------------------------------------------------------------

	$scope.pattern.input = $scope.pattern.html;
	$scope.offPatternInputWatch = $scope.$watch('pattern.input', function(){
		$scope.pattern.safeInput = $sce.trustAsHtml($scope.pattern.input);
	});
	//console.log($scope.offPatternInputWatch);

}]);
