(function(){

	//def module
	var app = angular.module('angular-demo', ['ngSanitize', 'ngRoute', 'firebase']);

	//register app constants
	//firebase account gaga1227@gmail.com
	app.constant('FIREBASE_URL', 'https://angular-escape-plan.firebaseio.com/comments');

	//register directive to module
	app.directive('comments', function(){
		return {
			restrict: 'AE',
			controller: ['$scope', 'Comments', 'UserAuth', function($scope, Comments, UserAuth){
				//local ref to user
				$scope.UserAuth = UserAuth;
				//monitor service data updates
				$scope.$watch('UserAuth.user', function(user){
					console.log('User $watch: ', user);
				});
				//local ref to Comments factory
				$scope.comments = Comments;
				//textarea view model
				$scope.commentMd = '';
				//methods
				$scope.post = function(){
					//validate
					if ($scope.commentMd == '') {
						alert('Empty post message!');
						return;
					}
					//add to model via factory method
					Comments.post($scope.commentMd);
					//reset textarea view model
					$scope.commentMd = '';
				};
			}],
			templateUrl: 'partial/403-comments.html'
		}
	});

	//services
	app.factory('FirebaseRef', ['FIREBASE_URL', function(FIREBASE_URL){
		var ref = new Firebase(FIREBASE_URL);
		return ref;
	}]);

	app.factory('Comments', ['$firebase', 'FirebaseRef', function($firebase, FirebaseRef){
		//firebase
		var sync = $firebase(FirebaseRef);
		//comments local models
		var comments = sync.$asArray();
		//methods
		//adding methods to obj won't be synced over to firebase
		comments.post = function(md){
			//add to model
			comments.$add({ "md": md });
		};
		//return obj
		return comments;
	}]);

	app.factory('UserAuth', ['FirebaseRef', '$rootScope', function(FirebaseRef, $rootScope){
		//auth client
		var authClient = new FirebaseSimpleLogin(FirebaseRef, function(error, user){
			console.log('User: ', user);
			if (user) {
				//broadcast msg from rootscope
				$rootScope.$broadcast('FirebaseLogin::LoggedIn', user);
				//set user info to UserAuth obj
				//we're updating service obj value outside of angular in the handler function
				//need to include updated in digest loop via $apply
				$rootScope.$apply(function(){
					UserAuth.user = user;
				});
			} else {
				$rootScope.$broadcast('FirebaseLogin::LoggedOut', user);
				$rootScope.$apply(function(){
					UserAuth.user = null;
				});
			}
		});

		//auth obj for return as factory service
		var UserAuth = {
			login: function(provider) {
				authClient.login(provider);
			},
			logout: function() {
				authClient.logout();
			},
			user: null
		};

		//return obj
		return UserAuth;
	}]);

	//register filter
	app.filter('mdToHtml', function(){
		return function(input){
			return markdown.toHTML(input);
		};
	});

	//controllers
	app.controller('loginCtrl', ['$scope', 'UserAuth', function($scope, UserAuth){
		//set local ref to UserAuth service
		$scope.UserAuth = UserAuth;
		//monitor service data updates
		$scope.$watch('UserAuth.user', function(user){
			console.log('User $watch: ', user);
		});
	}]);

	//config
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: "partial/post.html"
			})
			.when('/login', {
				templateUrl: "partial/login.html",
				controller: "loginCtrl"
			});
	}]);

})();
