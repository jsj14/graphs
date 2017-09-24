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
			var no=paper1.text(40,230,"No");
			var line2=paper1.path("M30,280 L 30,340");//arrow line
		var v2=paper1.path("M30,340 L 25,325 L35,325Z");//arrow heAD
			var next=paper1.text(40,310,".");
			var s=0,o=0,c=0,i=0;
// function openJira()
// {
	// document.getElementById("confirmJira").style.visibility="visible";
// }
Raphael.st.setID = function(id)
 {
 this.id = id;
 };
 // Raphael.st.setcloneID = function(id)
 // {
 // this.id = id+i;
 // };
// 
// var myset=paper1.set();
// myset.push(oval);
// myset.push(t);
// 
// oval.setID("start"); //give the id you want
// 
// $(document).ready(function(){
// $("#start").draggable({ 
	// helper:'clone'});
// 
// });
Raphael.st.draggable = function() 
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
      startFnc1 = function() {
      	//me.clone();
      	s++;
     
   		//	me.setID("W");
		
      		me.setID("S"+s);
      		console.log(me.id);
      	   
      },
      endFnc1 = function() {
          ox = lx;
          oy = ly;
          console.log(me);
         
          clonify();
         
         // n.setcloneID(id);
         
         // me.setID="w1";
         //var downarrow= myset4.clone();
         
      };
  this.drag(moveFnc1, startFnc1, endFnc1);
};
// Raphael.st.draggable2 = function() 
 // { var me = this,
      // lx = 0,
      // ly = 0,
      // ox = 0,
      // oy = 0;
   // moveFnc2 = function(dx, dy) {
          // lx = dx + ox;
          // ly = dy + oy;
          // me.transform('t' + lx + ',' + ly);
      // },
      // startFnc2 = function() {
      	// //me.clone();
      	// o++;
//      
   		// //	me.setID("W");
// 		
      		// me.setID("O"+o);
      		// console.log(me.id);
//       	   
      // },
      // endFnc2 = function() {
          // ox = lx;
          // oy = ly;
          // console.log(me);
//          
          // clonify();
//          
         // // n.setcloneID(id);
//          
         // // me.setID="w1";
         // //var downarrow= myset4.clone();
//          
      // };
  // this.drag(moveFnc2, startFnc2, endFnc2);
// };
// Raphael.st.draggable3= function() 
 // { var me = this,
      // lx = 0,
      // ly = 0,
      // ox = 0,
      // oy = 0;
   // moveFnc3 = function(dx, dy) {
          // lx = dx + ox;
          // ly = dy + oy;
          // me.transform('t' + lx + ',' + ly);
      // },
      // startFnc3 = function() {
      	// //me.clone();
      	// c++;
//      
   		// //	me.setID("W");
// 		
      		// me.setID("C"+c);
      		// console.log(me.id);
//       	   
      // },
      // endFnc3 = function() {
          // ox = lx;
          // oy = ly;
          // console.log(me);
//          
          // clonify();
//          
         // // n.setcloneID(id);
//          
         // // me.setID="w1";
         // //var downarrow= myset4.clone();
//          
      // };
  // this.drag(moveFnc3, startFnc3, endFnc3);
// };
function clonify(){
	i++;
 var s=myset.clone().draggable();
       s.setcloneID(id);
   var y=myset1.clone().draggable();
        //  y.setcloneID(id);
          var r=myset2.clone().draggable();
        //  r.setcloneID(id);
         var d=myset4.clone().draggable();
         //d.setcloneID(id);
        var n=myset3.clone().draggable();
        }
var myset=paper1.set();
myset.push(oval);
myset.push(t);
myset.draggable();
var start=myset.clone();
start.draggable();
myset.setID("start");
	 //setting a flag to know Start was the one that was dragged or dropped.
	

 var myset1=paper1.set();//yes arrow
 myset1.push(cond);
  myset1.push(text);
 myset1.push(yesline);
 myset1.push(yesv);
 myset1.push(yestext);
 myset1.draggable();
 myset1.setID("yesarrow");	
 var condition=myset1.clone().draggable();
 	
// 
var myset4=paper1.set();//down arrow without text
 myset4.push(line2);
 myset4.push(v2);
 myset4.push(next);
 myset4.draggable();
 myset4.clone().draggable();
 myset4.setID("downarrow");
 
 var myset3=paper1.set();//no arrow
 myset3.push(line);
 myset3.push(v);
 myset3.push(no);
myset3.draggable();
 var arrow=myset3.clone().draggable();
  myset3.setID("Noarrow");
 var myset2=paper1.set();
 myset2.push(rect3);
 myset2.push(text2);
 myset2.draggable();
	 var operation=myset2.clone().draggable();
 myset2.setID("operation");
function autoarrow() {
			var g = new Graph();
 paper1.foreach()
g.addEdge(s, y);

var renderer = new Graph.Renderer.Raphael('here', g, 700, 400);
renderer.draw();
	}
//var s=paper1.set(myset,myset1,myset2,myset3,myset3,myset4).drag(moveFnc, startFnc, endFnc);
//	h=1;//flag for diamond

// connection('start', )


	