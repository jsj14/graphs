$( init);
function init(){

$('.draggable').draggable({helper: 'clone'});                   

$("#drop").droppable({ 
           accept: ".draggable", 
           drop: function(event, ui) 
    {         var context = getContext("2d");
               var dropped = ui.draggable;
              var droppedOn = $(this);
      $(dropped).css({top: 0,left: 0}).appendTo(droppedOn); }
});
 /* @author JULIAN
 */
}