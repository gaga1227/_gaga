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
						"text": "Comments 1"
					},
					{
						"text": "Comments 2"
					},
					{
						"text": "Comments 3"
					}
				];
			}],
			templateUrl: 'partial/comments.html'
		}
	});

})();
