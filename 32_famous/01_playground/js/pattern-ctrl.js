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
			// maxLines: 'Infinity',
			vScrollBarAlwaysVisible: true,
			showInvisibles: true,
			fontSize: '16px'
		});
	};
	// on change
	$scope.aceChanged = function(e) {
		// console.log(e);
	};

	// inputs
	// -------------------------------------------------------------------------------------------

	//beautify stored html before display
	var style_html_options = {
		indent_char : '	',
		indent_size : 1,
		max_char : 0
	};
	$scope.pattern.input = style_html($scope.pattern.html, style_html_options);

	// display
	// -------------------------------------------------------------------------------------------

	//common vars
	var $frame = $('#app-pattern-display');
	var $frameHead = $frame.contents().find('head');
	var $frameBody = $frame.contents().find('body');

	//generate repo file
	var getRepoFile = function(file, ext) {
		var url = $scope.repo.path + file.path + file.filename + '.' + ext;
		var $file;
		if (ext == 'css') {
			$file = $('<link>');
			$file.attr({
				"rel" : "stylesheet",
				"href" : url
			});
		}
		else if (ext == 'js') {
			$file = $('<script></script>');
			$file.attr({
				"src" : url
			});
		}
		return $file;
	}

	//inject repo css dependencies
	$.each($scope.repo.css, function(idx, ele){
		$frameHead.append( getRepoFile(ele, 'css') );
	});

	//watch input value and translate to display
	var cancelPatternInputWatch = $scope.$watch('pattern.input', function(){
		//inject to iframe
		$frameBody.html($scope.pattern.input);
	});

	//clean up watch
	$scope.$on('destroy', function(e){
		cancelPatternInputWatch();
	});

}]);
