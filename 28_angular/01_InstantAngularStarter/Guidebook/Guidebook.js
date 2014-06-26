var guidebookConfig = function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ChaptersController',
      templateUrl: 'view/chapters.html'
    })
    .when('/chapter/:chapterId', {
      controller: 'ChaptersController',
      templateUrl: 'view/chapters.html'
    })
    .when('/addNote/:chapterId', {
      controller: 'AddNoteController',
      templateUrl: 'view/addNote.html'
    })
    .when('/deleteNote/:chapterId/:noteId', {
      controller: 'DeleteNoteController',
	  //using hard-code template string
      template: '<p style="text-align:center;">Deleting Note: {{selectedNoteId}}</p>'
    })
	.otherwise({
	  redirectTo: '/'
	});
};

//register route config to module
var Guidebook = angular.module('Guidebook', ['ngRoute']).config(guidebookConfig);
