
var paper1 = Raphael(300,120,550,400);
 var separation=paper1.path("M230,0 L 230,400");
 	var conclutext=paper1.text(180,20,"Conclusions");
  	var oval = paper1.ellipse (34,34,30,20);
			var t = paper1.text(35, 35, "Start");
			var conclu1=paper1.rect(140,30,80,40);
			var t2=paper1.text(174,50,"ORGANIC");
			var conclu2=paper1.rect(140,80,80,40);
			var t3=paper1.text(175,100,"PAID");
			var conclu3=paper1.rect(140,130,80,40);
			var t4=paper1.text(170,150,"DIRECT");
			var conclu4=paper1.rect(140,180,80,40);
			var t5=paper1.text(178,200,"PAID SOCIAL");
			var conclu5=paper1.rect(130,230,90,40);
			var t6=paper1.text(175,250,"SOCIAL ORGANIC");
			var cond= paper1.path("M15,110 L 45,140 L 75,110 L 45,80 Z");
			var text=paper1.text(40,110,"Decision");
			var yesline=paper1.path("M85, 110 L 125,110");
			var yesv=paper1.path("M125,110 L 120, 115 L 120,105Z");
			var yestext=paper1.text(105,105,"YES");
			var rect3=paper1.path("M10,150 L 10,190 L 60,190 L 60,150Z");
			
			var text2=paper1.text(35,170,"Operation");
			var line=paper1.path("M30,200 L 30,260");//arrow line
		var v=paper1.path("M30,260 L 25,245 L35,245Z");//arrow heAD
			var no=paper1.text(40,230,"No");
			var line2=paper1.path("M30,280 L 30,340");//arrow line
		var v2=paper1.path("M30,340 L 25,325 L35,325Z");//arrow heAD
			var next=paper1.text(40,310,".");
			var s=0,o=0,c=0,d=0,n=0;
			var f=0,g=0,h=0,i=0,j=0;
				var stop=paper1.ellipse(34, 365,30,20);
			var t3= paper1.text(35,366, "Stop");
 //var paper2=Raphael(850,170,400,150);
	//var conclu1=paper2.rect(855,175 ,40,40);
//	var text4=paper2.text(855,180,"ORAGANIC");
// function openJira()
// {
	// document.getElementById("confirmJira").style.visibility="visible";
// }
// function callcondition()
	// { document.getElementById("popup").style.visibility="visibile";
		// var max_fields = 10;
				// //maximum input boxes allowed
				// var wrapper = $(".popup_wrap");
				// //Fields wrapper
				// var add_button = $(".more_field_button");
// $(add_button).click(function(e) {//on add input button click
// 
// 
					// $(wrapper).css('display', 'inline-block');	
					// e.preventDefault();
// 			
				// //text box increment
// $(wrapper).append('<div style="display:inline-block;"><form name="popupform" method="POST" id="popform"><select><option disabled selected>Condition:</option><option value="AND">And</option><option value="OR">OR</option></select><a href="#" class="remove_field"><img src="img/minus.pngstyle="position:relative; top:-65px;left:65px;" width="20px"></a></form><br><form name="popupform" method="POST" id="popform" action="" onsubmit=""><select style="width:33%;"><option  disabled selected>LHS:</option><option value="">Current URL</option><option value="Atlas">Referrer URL</option><option value="Sizmek">Current page Parameters</option></select><select style="width:33%;"><option  disabled selected>operation:</option><option value="!=">!=</option><option value="contains">contains</option><option value="==">==</option></select><input type="text" placeholder="RHS" id="Channelone" name="mychannel[]" style="width:30%;" required><input type="image" id="plus" class="more_field_button" src="img/plus.png" width="20px" height="20px" ></form></div>');
			// });
// 
				// $(wrapper).on("click", ".remove_field", function(e) {//user click on remove text
					// e.preventDefault();
					// $(this).parent('div').remove();
// 					
				// });
		// }
Raphael.st.setID = function(id)
 {
 	
 	 if((g==1))
 		{ o++; 
 		this.id = id+o;
 		g=0;}
 	else if((h==1))
 		 {c++; 
 		 	this.id = id+c;
 		 	h=0;
 		 //	condition();
 		 }
    else if(i==1)
    { d++;
    	this.id=id+d;//down arrow
    	i=0;
    }
    else if(j==1)
    {
    	n++;
    	this.id=id+n;//no arrow
    	j=0;
    }
 };
  
Raphael.st.draggable1 = function() //start
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc1 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc1 = function() {},
      endFnc1 = function() {
          ox = lx;
          oy = ly;
          console.log(me);
         
          cloneS();
         me.setID("Start");
         console.log(me.id);
         // n.setcloneID(id);
         
         // me.setID="w1";).mouseup(function(e) {
    alert("clicked");
 
         //var downarrow= myset4.clone();
         
      };
  this.drag(moveFnc1, startFnc1, endFnc1);
};


Raphael.st.draggable2 = function() //Operation
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc2 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc2 = function() {},
      endFnc2 = function() {
          ox = lx;
          oy = ly;
          console.log(me);
         
          cloneO();
         me.setID("O");
         console.log(me.id);
         // n.setcloneID(id);
         
         // me.setID="w1";
         //var downarrow= myset4.clone();
         
      };
  this.drag(moveFnc2, startFnc2, endFnc2);
};
Raphael.st.draggable3= function() //condition
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc3 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc3 = function() {},
      endFnc3 = function() {
          ox = lx;
          oy = ly;
         // console.log(me);
         
          cloneC();
         me.setID("C");
         console.log(me.id);
 
	// document.getElementById("popup").style.visibility="visibile";
		// var max_fields = 10;
				// //maximum input boxes allowed
				// var wrapper = $(".popup_wrap");
				// //Fields wrapper
				// var add_button = $(".more_field_button");
// $(add_button).click(function(e) {//on add input button click
// 
// 
					// $(wrapper).css('display', 'inline-block');	
					// e.preventDefault();
// 			
				// //text box increment
// $(wrapper).append('<div style="display:inline-block;"><form name="popupform" method="POST" id="popform"><select><option disabled selected>Condition:</option><option value="AND">And</option><option value="OR">OR</option></select><a href="#" class="remove_field"><img src="img/minus.pngstyle="position:relative; top:-65px;left:65px;" width="20px"></a></form><br><form name="popupform" method="POST" id="popform" action="" onsubmit=""><select style="width:33%;"><option  disabled selected>LHS:</option><option value="">Current URL</option><option value="Atlas">Referrer URL</option><option value="Sizmek">Current page Parameters</option></select><select style="width:33%;"><option  disabled selected>operation:</option><option value="!=">!=</option><option value="contains">contains</option><option value="==">==</option></select><input type="text" placeholder="RHS" id="Channelone" name="mychannel[]" style="width:30%;" required><input type="image" id="plus" class="more_field_button" src="img/plus.png" width="20px" height="20px" ></form></div>');
			// });
// 
				// $(wrapper).on("click", ".remove_field", function(e) {//user click on remove text
					// e.preventDefault();
					// $(this).parent('div').remove();
// 					
				// });
		
        
      };
  this.drag(moveFnc3, startFnc3, endFnc3);
};
var myset1=paper1.set();//diamond and yes arrow
 myset1.push(cond);
 myset1.push(text);
 myset1.push(yesline);
 myset1.push(yesv);
 myset1.push(yestext);

myset1.draggable3();

Raphael.st.draggable4= function() //down arrow
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc4 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc4 = function() {},
      endFnc4 = function() {
          ox = lx;
          oy = ly;
         // console.log(me);
         
          cloneD();
         me.setID("D");
         console.log(me.id);
        
      };
  this.drag(moveFnc4, startFnc4, endFnc4);
};
Raphael.st.draggable5= function() //no arrow
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc5 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc5 = function() {},
      endFnc5 = function() {
          ox = lx;
          oy = ly;

          cloneN();
         me.setID("N");
         console.log(me.id);
        
      };
  this.drag(moveFnc4, startFnc4, endFnc4);
};
Raphael.st.draggable5 = function() //start
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc5 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc5 = function() {},
      endFnc5 = function() {
          ox = lx;
          oy = ly;
          console.log(me);
         
          cloneS();
         me.setID("Start");
         console.log(me.id);
         // n.setcloneID(id);
         
         // me.setID="w1";).mouseup(function(e) {
    alert("clicked");
 
         //var downarrow= myset4.clone();
         
      };
  this.drag(moveFnc5, startFnc5, endFnc5);
};

function cloneN(){
	
 myset4.clone().draggable1();
   
   j=1; //flag for No arrow
        }
function cloneD(){
	
 myset4.clone().draggable1();
   
   i=1; //flag for Down arrow
        }
        
function cloneS(){//to clone start
	
 myset.clone().draggable1();
 
   //f=1; //flag for start
        }
        
   function cloneO(){//to clone operation
   	
   	 myset2.clone().draggable2();
   	
      g=1;    //flag for operation
   }
   function cloneC()//to clone condition
   { 
        myset1.clone().draggable3();
       
        h=1; //flag for condition
   }
var myset=paper1.set();
myset.push(oval);
myset.push(t);
myset.draggable1();
var start=myset.clone();
start.draggable1();
//myset.setID("start");
	 //setting a flag to know Start was the one that was dragged or dropped.
	

var myset1=paper1.set();//diamond and yes arrow
 myset1.push(cond);
 myset1.push(text);
 myset1.push(yesline);
 myset1.push(yesv);
 myset1.push(yestext);
 myset1.draggable3();
//myset1.setID("yesarrow");	
 var condition=myset1.clone().draggable3();
 	
 
 var myset4=paper1.set();//down arrow with '.'
 myset4.push(line2);
 myset4.push(v2);
 myset4.push(next);
 myset4.draggable4();
 myset4.clone().draggable4();
//. myset4.setID("downarrow");
 
 var myset3=paper1.set();//no arrow
 myset3.push(line);
 myset3.push(v);
myset3.push(no);
 myset3.draggable3();
 var arrow=myset3.clone().draggable3();
 myset3.setID("Noarrow");
 
 var myset2=paper1.set();//operation
 myset2.push(rect3);
 myset2.push(text2);
 myset2.draggable2();
 var operation=myset2.clone().draggable2();
 myset2.setID("operation");
// function autoarrow() {
			// var g = new Graph();
 // //paper1.foreach()
// //g.addEdge(s, y);
// 
// var renderer = new Graph.Renderer.Raphael('here', g, 700, 400);
// renderer.draw();
	// }
	
	
//var s=paper1.set(myset,myset1,myset2,myset3,myset3,myset4).drag(moveFnc, startFnc, endFnc);
//	h=1;//flag for diamond

// connection('start', )
// function makejson(){
// paper1.forEach(el){
// 
    // var item = someData[i];
// 
    // employees.accounting.push({ 
        // "firstName" : item.firstName,
        // "lastName"  : item.lastName,
        // "age"       : item.age 
    // });
// }
// }
	