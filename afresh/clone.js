$(init);
function init(){
	var i=0;
	var x=0; 
	
/*	$('#down').bind('dragstart', function(e) {
    e.originalEvent.dataTransfer.effectAllowed = 'copy';
    e.originalEvent.dataTransfer.setData('Text', '#down');
  
    e.originalEvent.dataTransfer.setattribute('id', id+'copy');
    $('#down').draggable();
});

$('#workspace').bind('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $(this).html($(e.originalEvent.dataTransfer.getData('Text')).clone());

    return false;
}).bind('dragover', false); */
	
	$( '.block' ).draggable({
        connectToSortable: ".list",
        helper: "clone",	
//var cloneCount = 1;;
/*$("<img>").click(function(){
	$('#id')
	.clone()
	.attr('id', 'id'+ cloneCount++)
	.draggable()
});*/
        
       start: function(event,ui){
            //get ID form draggable item 
            itemId = $(this).attr('id');
            var x=itemId;
        },
                stop: function(event,ui){
            //assign ID to clone
            i=i+1;
            itemId=itemId+i;
            x=itemId;
            ui.helper.attr('id',itemId); 
            console.log(x); }
            
   });

$(".list").sortable({
  connectWith: ".list",
});

}
/**
 * @author JULIAN
 */
