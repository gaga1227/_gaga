(function(){

	//def module
	var app = angular.module('angular-demo', ['ngSanitize']);

	//register directive to module
	app.directive('comments', function(){
		return {
			restrict: 'AE',
			controller: ['$scope', function($scope){
				//comments local models
				$scope.comments = [
					{
						"md": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla congue, tellus id eleifend porta, augue quam suscipit dolor"
					},
					{
						"md": "Eget vestibulum leo est in leo. Sed bibendum id nisl sed sodales. Suspendisse id diam pellentesque, gravida nibh a, ultrices tellus."
					},
					{
						"md": "Sed ante sem, molestie et pulvinar in, feugiat a diam. Vestibulum id mauris ut tellus vulputate blandit. Integer nibh nibh, pretium bibendum vehicula nec, posuere sed nunc. Aenean eros lorem, faucibus sed volutpat vitae, mollis at risus. "
					}
				];

				//textarea view model
				$scope.commentMd = '';

				//methods
				$scope.post = function(){
					//validate
					if ($scope.commentMd == '') {
						alert('Empty post message!');
						return;
					}
					//add to model
					$scope.comments.push({ "md": $scope.commentMd });
					//reset textarea view model
					$scope.commentMd = '';
				};
			}],
			templateUrl: 'partial/301-comments.html'
		}
	});

	//register filter
	app.filter('mdToHtml', function(){
		return function(input){
			return markdown.toHTML(input);
		};
	});

})();
