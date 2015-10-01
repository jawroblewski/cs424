//overall app logic and loader...
function travelNotes() {
  "use strict";

  //manage input field and new note output
  function createNote() {
    //object for wrapper html for note
    var $note = $("<p>");
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    if ($note_text.val() !== "") {
    //set content for note
    $note.html($note_text.val());
    //hide new note to setup fadeIn...
    $note.hide();
    //append note text to note-output
    $(".note-output").append($note);
    //fadeIn hidden new note
    $note.fadeIn("slow");
    $note_text.val("");
    }
  }

  //handle user event for `add` button click
  $(".note-input button").on("click", function(e) {
    createNote();
  });

  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e){
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });
    
function deleteNote() {
    var $note = $("<p>");
    var $note_gone = $(".note-delete input");
    
    //handle user event for 'delete buttonclick
    $(".note-delete button").on(click", function(d) {
                                deleteNote();
    ]);
    //handle user event for delete key keyboard press
    $("note-delete button").on("keypress", function(d){
        //check code for keyboard press
        if (e.keyCode === 46) {
            deleteNote();
        }
    });
    
};
    function deleteallNote() {
    var $note = $("<p>");
    var $note_gone = $(".note-deleteall input");
    
    //handle user event for 'delete buttonclick
    $(".note-deleteall button").on(click", function(k) {
                                deleteallNote();
    ]);
    //handle user event for delete key keyboard press
    $("note-input input").on("keypress", function(k){
        //check code for keyboard press
        if (e.keyCode === 46) {
            deleteallNote();
        }
    });
    
};

$(document).ready(travelNotes);
