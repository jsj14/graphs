var paper1 = Raphael(300,120,700,400);
  	var oval = paper1.ellipse (34,34,30,20);
			var t = paper1.text(35, 35, "Start");
			var cond= paper1.path("M15,110 L 45,140 L 75,110 L 45,80 Z");
			var text=paper1.text(40,110,"Decision");
			var yesline=paper1.path("M75, 110 L 125,110");
			var yesv=paper1.path("M125,110 L 120, 115 L 120,105Z");
			var yestext=paper1.text(95,105,"YES");
			var rect3=paper1.path("M10,150 L 10,190 L 60,190 L 60,150Z");
			
			var text2=paper1.text(35,170,"Operation");
			var line=paper1.path("M30,200 L 30,260");//arrow line
			var v=paper1.path("M30,260 L 25,245 L35,245Z");//arrow heAD
			var no=paper1.text(40,230,"NO");
			var f=0,g=0,h=0;var s=0;
function openJira()
{
	document.getElementById("confirmJira").style.visibility="visible";
}

//Raphael.st.draggable = function() {
  // var me = this,
      // lx = 0,
      // ly = 0,
      // ox = 0,
      // oy = 0;
//     
   // var   moveFnc = function(dx, dy) {
          // lx = dx +   // var me = this,
      // lx = 0,
      // ly = 0,
      // ox = 0,
      // oy = 0;
//     
   // var   moveFnc = function(dx, dy) {
          // lx = dx + ox;
          // ly = dy + oy;
          // me.transform('t' + lx + ',' + ly);
      // },
      // startFnc = function() {},
      // endFnc = function() {
          // ox = lx;
          // oy = ly;
//         
//           
      // };
//   ox;
          // ly = dy + oy;
          // me.transform('t' + lx + ',' + ly);
      // },
      // startFnc = function() {},
      // endFnc = function() {
          // ox = lx;
          // oy = ly;
//         
//           
      // };
//   
//};

// var start = function () {
                    // this.ox = this.attr("lx");
                    // this.oy = this.attr("ly");
                // },
                // move = function (dx, dy) {
                    // this.attr({cx: this.ox + dx, cy: this.oy + dy});
                // },
                // up = function () {
//                    
           // };
      
var myset=paper1.set();
myset.push(oval);
myset.push(t);
//myset.draggable();
//var start=myset.clone().draggable();
//this.drag.end(function()
	 //setting a flag to know Start was the one that was dragged or dropped.
	//myset.node.onclick=startdrag;
	
	var myset2=paper1.set();//operation
myset2.push(rect3);
myset2.push(text2);
//myset2.draggable();
	//var operation=myset2.clone().draggable();// using attribute fn
	var me=myset.clone();
	var   lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
      
me.attr({
    cursor: 'pointer',
})
.mouseover(function(e) {
	   lx = dx + ox;
        ly = dy + oy;
        me.transform('t' + lx + ',' + ly);
      
}).mouseout(function(e,dx,dy) {
        ox = lx;
         oy = ly;
       //  this.attr({lx: this.ox + dx, ly: this.oy + dy});
}).mouseup(function(e) {
 		
      
     alert("clicked");
});

var myset1=paper1.set();//diamond with yes
myset1.push(cond);
myset1.push(text);
myset1.push(yesline);
myset1.push(yesv);
myset1.push(yestext);
//myset1.draggable();
	
var condition=myset1.clone();

condition.mouseup(function(e){

$("#dialog").dialog({
autoOpen: false
});
myset1.node.onclick=function() {
$("#dialog").dialog("open");

};
// Validating Form Fields.....
$("#submit").click(function(e) {
var email = $("#email").val();
var name = $("#name").val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if (email === '' || name === '') {
alert("Please fill all fields...!!!!!!");
e.preventDefault();
} else if (!(email).match(emailReg)) {
alert("Invalid Email...!!!!!!");
e.preventDefault();
} else {
alert("Form Submitted Successfully......");
}
});
	
});
	g=1;//flag for diamond

var myset4=paper1.set();//arrow down only without text
myset4.push(line);
myset4.push(v);
//myset4.draggable();
//myset4.clone().draggable();

var myset3=paper1.set();//arrow down
myset3.push(line);
myset3.push(v);
myset3.push(no); //no
//myset3.draggable();
//var arrow=myset3.clone().draggable();
 
var myset2=paper1.set();//operation
myset2.push(rect3);
myset2.push(text2);
//myset2.draggable();
	//var operation=myset2.clone().draggable();
	
//function startdrag()
{
//var p=prompt("Please type in your name","Julian");
		
}
	h=1;//flag for operation

		// var g = new Graph();
//  
// g.addEdge("start", "operation");
// 
// var layouter = new Graph.Layout.Spring(g);
// layouter.layout();
//  
// var renderer = new Graph.Renderer.Raphael('here', g, 700, 400);
// renderer.draw();
	// }
// };

$(document).ready(function() {
				var max_fields = 10;
				//maximum input boxes allowed
				var wrapper = $(".popup_wrap");
				//Fields wrapper
				var add_button = $(".more_field_button");
$(add_button).click(function(e) {//on add input button click
					$(wrapper).css('display', 'inline-block');	
					e.preventDefault();
$(wrapper).append('<div style="display:inline-block;"><form name="popupform" method="POST" id="popform"><select><option disabled selected>Condition:</option><option value="AND">And</option><option value="OR">OR</option></select><a href="#" class="remove_field"><img src="img/minus.pngstyle="position:relative; top:-65px;left:65px;" width="20px"></a></form><br><form name="popupform" method="POST" id="popform" action="" onsubmit=""><select style="width:33%;"><option  disabled selected>LHS:</option><option value="">Current URL</option><option value="Atlas">Referrer URL</option><option value="Sizmek">Current page Parameters</option></select><select style="width:33%;"><option  disabled selected>operation:</option><option value="!=">!=</option><option value="contains">contains</option><option value="==">==</option></select><input type="text" placeholder="RHS" id="Channelone" name="mychannel[]" style="width:30%;" required><input type="image" id="plus" class="more_field_button" src="img/plus.png" width="20px" height="20px" ></form></div>');
			});

				$(wrapper).on("click", ".remove_field", function(e) {//user click on remove text
					e.preventDefault();
					$(this).parent('div').remove();
					
				});
				
				
				
				
			});
		