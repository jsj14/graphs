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
			var f=0,g=0,h=0;
function openJira()
{
	document.getElementById("confirmJira").style.visibility="visible";
}
Raphael.st.draggable = function() {
  var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0,
      moveFnc = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc = function() {},
      endFnc = function() {
          ox = lx;
          oy = ly;
          var down=myset4.clone().draggable();
      };
  this.drag(moveFnc, startFnc, endFnc);
};
var myset=paper1.set();
myset.push(oval);
myset.push(t);
myset.draggable();
var start=myset.clone().draggable();
	 //setting a flag to know Start was the one that was dragged or dropped.
	

var myset1=paper1.set();
myset1.push(cond);
myset1.push(text);
myset1.push(yesline);
myset1.push(yesv);
myset1.push(yestext);
myset1.draggable();
	
var condition=myset1.clone().draggable();
	g=1;//flag for diamond

var myset4=paper1.set();
myset4.push(line);
myset4.push(v);
myset4.draggable();
myset4.clone().draggable();

var myset3=paper1.set();
myset3.push(line);
myset3.push(v);
myset3.push(no);
myset3.draggable();
var arrow=myset3.clone().draggable();
 
var myset2=paper1.set();
myset2.push(rect3);
myset2.push(text2);
myset2.draggable();
	var operation=myset2.clone().draggable();
	h=1;//flag for diamond

// connection('start', )


	