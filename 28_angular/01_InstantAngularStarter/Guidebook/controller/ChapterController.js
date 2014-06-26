Guidebook.controller('ChaptersController',
  function ($scope, $location, $routeParams, ChapterModel, NoteModel, $locale) {
	//prep initial data model
	var chapters = ChapterModel.getChapters();
    for (var i=0; i<chapters.length; i++) {
      chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
    }
	
	//refer data to scope
    $scope.chapters = chapters;
	
	//update selected chapter in scope   
    $scope.selectedChapterId = $routeParams.chapterId;
	
    //scope method
	$scope.onDelete = function(noteId) {
      var confirmDelete = confirm('Are you sure you want to delete this note?');
      if (confirmDelete) {
        $location.path('/deleteNote/' + $routeParams.chapterId + '/' + noteId);
      }
    };
	
	console.log('Chapters $routeParams', $routeParams);
  }
);
