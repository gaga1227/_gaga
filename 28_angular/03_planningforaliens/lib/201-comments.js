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
						"text": "Comment 1"
					},
					{
						"text": "Comment 2"
					},
					{
						"text": "Comment 3"
					}
				];
			}],
			templateUrl: 'partial/201-comments.html'
		}
	});

})();
