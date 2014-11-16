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
					Comments.post($scope.commentMd, $scope.UserAuth.user);
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

	//pending comments directive
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
			controller: ['$scope', function($scope){
				//private var to track start: the full list length on initial start
				var start;

				//view model
				$scope.pending = 0;

				//on start: firebase data 'Comments' loaded
				$scope.data.$loaded(function(){
					//make start the full list length on start: data load
					start = $scope.data.length;
					//call parent scope's exposed function through expression binding
					//pass in full list data, to display the full list, on start: data load
					$scope.reload({data: $scope.data.slice(0)});
				});

				//watch for comments list data updates
				$scope.$watchCollection('data', function(){
					//updates 'pending' view model: unshown comments count
					//this assumes comments can NOT be removed
					$scope.pending = $scope.data.length - start;
				});

				//upon click, show all comments
				$scope.update = function(){
					//call parent scope's exposed function through expression binding
					//display the latest full list
					$scope.reload({data: $scope.data.slice(0)});
					//reset 'pending' view model to nothing is unshown
					$scope.pending = 0;
				};
			}]
		}
	}]);

	//karma directive
	app.directive('karma', ['FirebaseRef', '$firebase', function(FirebaseRef, $firebase){
		return {
			restrict: 'AE',
			templateUrl: 'partial/502-karma.html',
			transclude: true,
			scope: {
				voter: '=',
				poster: '=',
				object: '='
			},
			controller: ['$scope', function($scope){
				//get firebase ref for the passed in comment object
				var ObjectRef = FirebaseRef.child($scope.object.$id);
				//create children to the passed in comment object on firebase
				var upvotes = $firebase(ObjectRef.child('upvotes')).$asArray();
				var downvotes = $firebase(ObjectRef.child('downvotes')).$asArray();

				//scope model
				$scope.points = 0;
				$firebase(ObjectRef).$asObject().$loaded(function(){
					$scope.points = upvotes.length - downvotes.length;
				});

				//scope methods
				$scope.canVote = function(){
					if (!$scope.voter) return false;
					for (var i=0; i<upvotes.length; i++) {
						var voted = upvotes[i];
						if (voted.$value === $scope.voter.id) {
							return false;
						}
					}
					for (var i=0; i<downvotes.length; i++) {
						var voted = downvotes[i];
						if (voted.$value === $scope.voter.id) {
							return false;
						}
					}
					return true;
				};
				$scope.upVote = function(){
					if ($scope.canVote()) {
						upvotes.$add($scope.voter.id);
					}
				};
				$scope.downVote = function(){
					if ($scope.canVote()) {
						downvotes.$add($scope.voter.id);
					}
				};
			}],
			link: function(scope, elem, attrs, controller, transclude){
				//transclude into comment elem (parent) with its scope
				transclude(elem.scope(), function(clone){
					//clone is the original content within comment
					elem.append(clone);
				});
			}
		}
	}]);

	//service - firebase ref
	app.factory('FirebaseRef', ['FIREBASE_URL', function(FIREBASE_URL){
		var ref = new Firebase(FIREBASE_URL);
		return ref;
	}]);

	//service - comments data and methods
	app.factory('Comments', ['$firebase', 'FirebaseRef', function($firebase, FirebaseRef){
		//firebase
		var sync = $firebase(FirebaseRef);
		//comments local models
		var comments = sync.$asArray();
		//methods
		//adding methods to obj won't be synced over to firebase
		comments.post = function(md, user){
			//add to model
			comments.$add({
				"md": md,
				"user": {
					"id": user.id
				}
			});
		};
		//return obj
		return comments;
	}]);

	//service - firebase simple login
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
