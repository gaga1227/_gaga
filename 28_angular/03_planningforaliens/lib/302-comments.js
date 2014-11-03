(function(){

	//def module
	var app = angular.module('angular-demo', ['ngSanitize', 'firebase']);

	//register app constants
	//firebase account gaga1227@gmail.com
	app.constant('FIREBASE_URL', 'https://angular-escape-plan.firebaseio.com/comments');

	//register directive to module
	app.directive('comments', function(){
		return {
			restrict: 'AE',
			controller: ['$scope', '$firebase', 'FIREBASE_URL', function($scope, $firebase, FIREBASE_URL){
				//firebase
				var ref = new Firebase(FIREBASE_URL);
				var sync = $firebase(ref);

				//comments local models
				$scope.comments = sync.$asArray();

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
					$scope.comments.$add({ "md": $scope.commentMd });
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
