Guidebook.service('NoteModel',
  function() {
	this.getNotesForChapter = function(chapterId) {
      //retrieve data from localStorage
	  var chapter = JSON.parse(window.localStorage.getItem(chapterId));
      //return notes array
	  if (!chapter) {
        return [];
      }
      return chapter.notes;
    };
	
    this.addNote = function(chapterId, noteContent) {
      //unique id
	  var now = new Date();
      //prep note data obj
	  var note = {
        content: noteContent,
        id: now
      };
	  //retrieve data obj from localStorage
      var chapter = JSON.parse(window.localStorage.getItem(chapterId));
      //prep chapter obj if undefined
	  if (!chapter) {
        chapter = {
          id: chapterId,
          notes: []
        }
      }
      //push new note obj to notes array
	  chapter.notes.push(note);
      //store chapter data obj
	  window.localStorage.setItem(chapterId, JSON.stringify(chapter));
    };
	
    this.deleteNote = function(chapterId, noteId) {
      //retrieve data from localStorage
	  var chapter = JSON.parse(window.localStorage.getItem(chapterId));
      //cancel if no chapter or notes data
	  if (!chapter || !chapter.notes) {
        return;
      }
	  //otherwise, go through notes array
      for (var i=0; i<chapter.notes.length; i++) {
        //if target found
		if (chapter.notes[i].id === noteId) {
		  //remove target note obj from array
		  chapter.notes.splice(i, 1);
          //store updated chapter data obj
		  window.localStorage.setItem(chapterId, JSON.stringify(chapter));
          //break loop
		  return;
        }
      }
    };
  }
);
