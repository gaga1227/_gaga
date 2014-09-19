(function(){

	//def module
	var app = angular.module('angular-demo', []);

	//register directive to module
	app.directive('comments', function(){
		return {
			restrict: 'AE',
			controller: ['$scope', function($scope){
				//model
				$scope.comments = [
					{
						"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue, tellus id eleifend porta, augue quam suscipit dolor"
					},
					{
						"text": "Eget vestibulum leo est in leo. Sed bibendum id nisl sed sodales. Suspendisse id diam pellentesque, gravida nibh a, ultrices tellus."
					},
					{
						"text": "Sed ante sem, molestie et pulvinar in, feugiat a diam. Vestibulum id mauris ut tellus vulputate blandit. Integer nibh nibh, pretium bibendum vehicula nec, posuere sed nunc. Aenean eros lorem, faucibus sed volutpat vitae, mollis at risus. "
					}
				];
			}],
			templateUrl: 'partial/203-comments.html'
		}
	});

})();
