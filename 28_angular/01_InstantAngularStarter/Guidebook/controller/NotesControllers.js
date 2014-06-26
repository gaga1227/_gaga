Guidebook.controller('AddNoteController',
  function ($scope, $location, $routeParams, NoteModel) {
    //get current state param
	var chapterId = $routeParams.chapterId;
    
	//scope APIs
	$scope.cancel = function() {
      //update route/view back to chapters
	  $location.path('/chapter/' + chapterId);
    }
    $scope.createNote = function() {
      //call data operation via 'NoteModel' service obj
	  NoteModel.addNote(chapterId, $scope.note.content);
	  //update route/view back to chapters
      $location.path('/chapter/' + chapterId);
    }
	
	console.log('AddNote $routeParams', $routeParams);
  }
);

Guidebook.controller('DeleteNoteController',
  function ($scope, $location, $routeParams, $timeout, NoteModel) {
    //get current state params
	var chapterId = $routeParams.chapterId,
		noteId = $routeParams.noteId;
	
	//call data operation via 'NoteModel' service obj
    NoteModel.deleteNote(chapterId, noteId);
    
	//pass route params as current state params in scope
	$scope.selectedNoteId = noteId;
	
	//update route/view back to chapters (with delay for clarification)
   	$timeout(function(){
	  $location.path('/chapter/' + chapterId); 
	} ,1000);
	
	console.log('DeleteNote $routeParams', $routeParams);
  }
);
