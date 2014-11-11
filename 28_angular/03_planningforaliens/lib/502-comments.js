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
					//console.log('User $watch: ', user);
				});
				//local ref to Comments factory
				//this is to be watched by pending directive
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
				//create loaded comments array for display in list
				$scope.loaded = [];
				//refresh fn, to be called by pending directive
				$scope.refresh = function(data){
					//update the loaded display list
					//to list data from pending
					$scope.loaded = data;
				};
			}],
			templateUrl: 'partial/502-comments.html'
		}
	});

	app.directive('pending', [function(){
		return {
			restrict: 'AE',
			templateUrl: 'partial/502-pending.html',
			replace: true,
			scope: {
				//data is watching 'Comments' from parent
				data: '=watch',
				//this is just a alias for refresh from parent
				reload: '&update'
			},
			link: function(scope){
				//private var to track start: the full list length on initial start
				var start;

				//view model
				scope.pending = 0;

				//on start: firebase data 'Comments' loaded
				scope.data.$loaded(function(){
					//make start the full list length on start: data load
					start = scope.data.length;
					//call parent scope's exposed function through expression binding
					//pass in full list data, to display the full list, on start: data load
					scope.reload({data: scope.data.slice(0)});
				});

				//watch for comments list data updates
				scope.$watchCollection('data', function(){
					//updates 'pending' view model: unshown comments count
					//this assumes comments can NOT be removed
					scope.pending = scope.data.length - start;
				});

				//upon click, show all comments
				scope.update = function(){
					//call parent scope's exposed function through expression binding
					//display the latest full list
					scope.reload({data: scope.data.slice(0)});
					//reset 'pending' view model to nothing is unshown
					scope.pending = 0;
				};
			}
		}
	}]);

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
			//console.log('User: ', user);
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
