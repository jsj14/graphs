/* var clientHeight = document.getElementById('here').clientHeight
console.log( clientHeight); */
var code='';
  var an;
var p="ORGANIC";
var paper1 = Raphael(180,90,550,400);
var separation=paper1.path("M230,0 L 230,400");
  	var oval = paper1.ellipse (34,34,30,20);
			var t = paper1.text(35, 35, "Start");
			var conclu1=paper1.rect(140,30,80,40);
			var t2=paper1.text(174,50,p);
			
			var conclu2=paper1.rect(140,80,80,40);
			var tp=paper1.text(175,100,"PAID");
			
			var conclu3=paper1.rect(140,130,80,40);
			var t4=paper1.text(170,150,"DIRECT");
			var conclu4=paper1.rect(140,180,80,40);
			var t5=paper1.text(178,200,"PAID SOCIAL");
			var conclu5=paper1.rect(130,230,90,40);
			var t6=paper1.text(175,250,"SOCIAL ORGANIC");
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
			var stop=paper1.ellipse(34, 365,30,20);
			var t3= paper1.text(35,366, "Stop");
			var s=0,o=0,c=0,d=0,n=0;
			var f=0,g=0,h=0,i=0,j=0;
			
		var max_fields = 0;
		$(document).ready(function() {
	//var client="var imageURL;var additionalParameters={CUSTOM_ACCESS_MODES_BY_REFERRER:\{SOCIAL_ORGANIC:[\"facebook.com\",\"twitter.com\",\"pinterest.com\",\"instagram.com\",\"tumblr.com\",\"plus.google.com\",\"plus.url.google.com\",\"youtube.com\"]\}};var p = /^http:/.test(document.location) ? 'http' : 'https';var result =new IQSeoTag(REFERRER_URL,CURRENT_URL,null,additionalParameters);result.Utils.tolowercaseCurrentPageParamsKeys();var referrerDomain;var host=CURRENT_URL.split(\"//\");var hostDomain=host[1].split(\"?\")[0];";	
	var client="Adidas";

 form =  $("<form></form>");
      new_obj =  $("<input name='str' type='hidden'></input>");
      new_obj.val(client);
      form.append(new_obj);
      

jQuery.ajax({
          url: "http://localhost:8060/CrunchifyRESTJerseyExample/crunchify/ftocservice/",	
          
    type: "POST",
    contentType : "application/x-www-form-urlencoded",
    data: form.serialize(),	
     crossDomain: true,
  
   
          beforeSend: function(x,request) {
         //   if (x && x.overrideMimeType) {
           //   x.overrideMimeType("application/j-son;charset=UTF-8");
            //}
            console.log(request);
          },
          success: function(jso) {
 	  var channels=[];
 	  var pixels=[];
                           console.log('success');
                           console.log(jso);
                        var res=jso.split("|");
                        var obj='{ "data" : [' + res[0] + ']}';
var obj = JSON.parse(res[0]);
console.log(Object.keys(obj));
console.log(obj);
                         
                         if (res[1]=="DoubleClick")                       
                         {
                         	for (var i=1;i<Object.keys(obj).length-1;i++)
                         	{
                         		var channel="Channel"+ i;
                         	channels.push(obj[channel]);
                         	
                         	}
                         	for (var i=1;i<Object.keys(obj).length-1;i++)
                         	{
                         		var pixel="Pixel"+ i;
                         		pixels.push(obj[pixel]);
                         	
                         	}
                         	
                         }
                         console.log(channels);
                         console.log(pixels);
          }
});





});
Raphael.st.condition = function()
	{ document.getElementById("showdiv").style.visibility="visible";

				//maximum input boxes allowed
				var wrapper = $(".popup_wrapper");
				var add_button= $(".more_field_button");
				//Fields wrapper
				$(wrapper).on("click", ".remove_field", function(e) {//user click on remove text
					e.preventDefault();
					$(this).closest('div').remove();
					
				});
				$(wrapper).on("click",".more_field_button2", function(e) {
				
				var Pallet = document.getElementById("popup_wrapper");
					$(wrapper).css('display', 'inline-block');	
					e.preventDefault();
					max_fields++;
					var divBox = document.createElement("div");
					var id="pop" + max_fields;
					divBox.setAttribute("id", id);
					Pallet.appendChild(divBox);
				
					var lhs=document.createElement("select");
					id="lhs" + max_fields;
					lhs.setAttribute("style","position:relative;left:80px;");
					lhs.setAttribute("class","lhs");
					lhs.setAttribute("id", id);
					lhs.setAttribute("style","position:relative;left:80px;");
					var values = ["CURRENT_URL","REFERRER_URL","result.Utils.getCurrentPageParamsKey()","result.modeOfAccess"];
					var options=["CURRENT_URL","REFERRER_URL","Current page Parameters Key","Mode of Access"];
					for (var i = 0; i < values.length; i++) {
    var option = document.createElement("option");
    option.value = values[i];
    option.text = options[i];
    lhs.appendChild(option);
    
    
    
    
    
}
					
					
					
					
				});
				
				
				
				
				
$(add_button).click(function(e) {//on add input button click
					$(wrapper).css('display', 'inline-block');	
					e.preventDefault();
// $(wrapper).append('<div id="remove" style="display:inline-block;"><form name="popupform" method="POST" id="popform"><select style="position:relative;left:80px;" class="cond"><option disabled selected>Condition:</option><option value="&&">AND</option><option  value="||">OR</option></select><input type="image"  class="remove_field" src="img/minus_black.png" style="position:relative;left:80px;"width="20px" height="20px" ><input type="image" style="position:relative;left:80px;" id="plus" class="more_field_button2" src="img/plus_black.ico" width="20px" height="20px" ></form><br><form name="popupform" method="POST" id="popform" action="" onsubmit=""><select id="LHSdecision"class="lhs"onclick="takelhs2(this)" style="width:20%;"><option  disabled selected>LHS:</option><option value="">Current URL</option><option value="Atlas">Referrer URL</option><option value="result.Utils.getCurrentPageParamsKey()">Current page Parameters</option><option value="result.modeOfAccess">Mode of Access</option></select><select class="ops" style="width:20%;"><option  disabled selected>operation:</option><option value="!=">!=</option><option value="contains">contains</option><option value="==">==</option></select><input type="text" class="rhs" placeholder="RHS" id="Channelone" name="mychannel[]" style="position:relative;left:15px;height:25px;width:50%;" required><div id="decision_div_second" style="visibility: hidden; height:50px;"><input type="text" id="analytics"  class="analyticfinal" placeholder="Enter analytics parameter"  required></div></form></div>');
			var Pallet = document.getElementById("popup_wrapper");
					$(wrapper).css('display', 'inline-block');	
					e.preventDefault();
					max_fields++;
					var divBox = document.createElement("div");
					var id="pop" + max_fields;
					divBox.setAttribute("id", id);
					divBox.setAttribute("class", "popup_wrapper");
					Pallet.appendChild(divBox);
						var form=document.getElementById("popupform_first").cloneNode(true);
					 id="popupform" + max_fields;
					 form.setAttribute("id", id);
					
	     divBox.appendChild(form);	
					var cond=document.createElement("select");
					 id="cond" + max_fields;
					 cond.setAttribute("id", id);
					 cond.setAttribute("class","cond");
					 cond.setAttribute("style", "position:relative;top:-30px;left:80px;");
					 form.appendChild(cond);
			var values = ["&&","||"];
			var options=["AND","OR"];
			
					for (var i = 0; i < values.length; i++) {
    var option = document.createElement("option");
    option.value = values[i];
    option.text = options[i];
    cond.appendChild(option);

    
    
    
    
}	
			});

				
		};
		function delete_box()
		{
	document.getElementById("showdiv").style.visibility="hidden";
	document.getElementById("decision_div").style.visibility="hidden";
	var elements = new Array();
elements = document.getElementsByClassName("analytic");
for(i in elements ){
if(typeof elements[i].value!='undefined')
     elements[i].style.visibility = "hidden";
}
			
			
		}
       function decision_box()
{
	var left=[];
var op=[];
var right=[];
var str=[];
var condition=[];
	document.getElementById("showdiv").style.visibility="hidden";
	document.getElementById("decision_div").style.visibility="hidden";
	var elements = new Array();
elements = document.getElementsByClassName("analytic");
for(i in elements ){
if(typeof elements[i].value!='undefined')
     elements[i].style.visibility = "hidden";
}
	
	console.log(document.getElementById("LHSdecision").value);
	 $("select[class=lhs]").each(function() {
if($(this).val()!=''){
    
        var l = $(this).val();


   


        left.push(l);
        }
    });
	 $("select[class=ops]").each(function() {
if($(this).val()!=null){
    
        var operator = $(this).val();


   


       op.push(operator);
        }
    });	
 $("input[class=rhs]").each(function() {
if($(this).val()!=null){
    
        var r = $(this).val();


   


       right.push(r);
        }
    });		
     $("select[class=cond]").each(function() {
if($(this).val()!=''){
    
        var c = $(this).val();


   


        condition.push(c);
        }
    });
    $("input[class=analytic]").each(function() {
if($(this).val()!=''){
    
         an = $(this).val();


   


       str.push(an);
        }
    });
   $("input[class=analyticfinal]").each(function() {
if($(this).val()!=''){
    
         an = $(this).val();


   


       str.push(an);
        }
    });
	code+="if" ;
	for(var i=0;i<left.length;i++)
	{
	if(left[i]=="result.Utils.getCurrentPageParamsKey()" )
	{
	code=code+" (typeof result.Utils.getCurrentPageParamsKey(";
	
	code=code+"\""+an+"\")"+ ".toLowerCase().substring(0,9)";
	code=code+ op[i];
	code=code+"\""+right[i]+"\"";
	if (i<(condition.length-1))
	{
		code=code+")";
	code+=condition[i];
	
	
	}
	}
	
	
	
	
	
	else if(left[i]=="result.modeOfAccess" )
	{
	code=code+" (result.modeOfAccess";
	
	
	code=code+ op[i];
	code=code+"\""+right[i]+"\"";
	if (i<(condition.length-1))
	{
		code=code+")";
	code+=condition[i];
	
	
	}
	}
	else if(left[i]=="REFERRER_URL" )
	{
	code=code+"(REFERRER_URL.toLowerCase().indexOf(\"";
	
		code=code+right[i]+"\")";
	code=code+ op[i];
code=code+"0))";

	if (i<condition.length)
	{
		code=code+")";
	code+=condition[i];
	
	
	}
	}
	
	else if(left[i]=="CURRENT_URL" )
	{
	code=code+"(CURRENT_URL.toLowerCase().indexOf(\"";
	
		code=code+right[i]+"\"";
	code=code+ op[i];
code=code+"0)";

	if (i<(condition.length-1))
	{
		code=code+")";
	code+=condition[i];
	
	
	}
	}
	}
	code=code+")";
	console.log(code);
}		
function takelhs(id){
	var ddl = document.getElementById(id);
	var sel=ddl.firstElementChild;

	//oFormObject = document.forms[sel];
	//oformElement = oFormObject.elements["lefthand"];

				var selectedValue =sel.options[sel.selectedIndex].value;
				
					if (selectedValue== "result.Utils.getCurrentPageParamsKey()")
		{				
					ddl.children[4].style.visibility="visible";
						
						
					
						
						
		}
		else{
		ddl.children[4].style.visibility="hidden";
		
	//	oFormObject.elements["param"].style.visibility="hidden";
			
		}
}
// function openJira()
// {
	// document.getElementById("confirmJira").style.visibility="visible";
// }
Raphael.st.setID = function(id)
 {
 	
 	 if(g==1&&(i==1||j==1))
 		{ o++; 
 		this.id = id+o;
 		g=0;}
 	else if(h==1&&(i==1||j==1))
 		 {c++; 
 		 	this.id = id+c;
 		 	h=0;
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
         
         // me.setID="w1";
         //var downarrow= myset4.clone();
         
      };
  this.drag(moveFnc1, startFnc1, endFnc1);
};
Raphael.st.draggable0 = function() //stop
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc0 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc0 = function() {},
      endFnc0 = function() {
          ox = lx;
          oy = ly;
          console.log(me);
         
          cloneStop();
         me.setID("Stop");
         console.log(me.id);
        
      };
  this.drag(moveFnc0, startFnc0, endFnc0);
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
       
		me.condition();
		alert("Handler for .mouseup() called.");
      };
  this.drag(moveFnc3, startFnc3, endFnc3);
};

var myset1=paper1.set();//diamond and yes arrow
 myset1.push(cond);
 myset1.push(text);
 myset1.push(yesline);
 myset1.push(yesv);
 myset1.push(yestext);

 var condition=myset1.clone().draggable3();
 
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
  this.drag(moveFnc5, startFnc5, endFnc5);
};
Raphael.st.draggable6= function() //organic
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc6 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc6 = function() {},
      endFnc6 = function() {
          ox = lx;
          oy = ly;
         // console.log(me);
          cloneorg();
         me.setID("Organic");
		alert("Handler for .mouseup() called.");
      };
  this.drag(moveFnc6, startFnc6, endFnc6);
};
Raphael.st.draggable7= function() //paid
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc7 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc7 = function() {},
      endFnc7 = function() {
          ox = lx;
          oy = ly;
         // console.log(me);
          clonepaid();
         me.setID("paid");
		alert("Handler for .mouseup() called.");
      };
  this.drag(moveFnc7, startFnc7, endFnc7);
};
Raphael.st.draggable8= function() //paid
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc8 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc8 = function() {},
      endFnc8 = function() {
          ox = lx;
          oy = ly;
         // console.log(me);
          clonedirect();
         me.setID("Direct");
		alert("Handler for .mouseup() called.");
      };
  this.drag(moveFnc8, startFnc8, endFnc8);
};
Raphael.st.draggable9= function() //paid
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc9 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc9 = function() {},
      endFnc9 = function() {
          ox = lx;
          oy = ly;
         // console.log(me);
          clonepaidsocial();
         me.setID("paidsocial");
		alert("Handler for .mouseup() called.");
      };
  this.drag(moveFnc9, startFnc9, endFnc9);
};
Raphael.st.draggable10= function() //paid
 { var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0;
   moveFnc10 = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc10 = function() {},
      endFnc10 = function() {
          ox = lx;
          oy = ly;
         // console.log(me);
          clonesocorg();
         me.setID("social_organic");
		//alert("Handler for .mouseup() called.");
      };
  this.drag(moveFnc10, startFnc10, endFnc10);
};

var mysetS=paper1.set();//stop
mysetS.push(stop);
mysetS.push(t3);
mysetS.clone();
mysetS.draggable0();
var organic=mysetS.clone().draggable6();
mysetS.setID("Stop");

var myset5=paper1.set();//organic
myset5.push(conclu1);
myset5.push(t2);
myset5.clone();
myset5.draggable6();
var organic=myset5.clone().draggable6();
myset5.setID("organic");
 
var myset9=paper1.set();//social organic
myset9.push(conclu5);
myset9.push(t6);
myset9.clone();
myset9.draggable10();
var organic=myset9.clone().draggable10();
myset9.setID("social_organic");

 var myset6=paper1.set();
myset6.push(conclu2);
myset6.push(tp);
myset6.clone();
myset6.draggable7();
 var paid=myset6.clone().draggable7();
 myset6.setID("paid");
 
 var myset7=paper1.set();
myset7.push(conclu3);
myset7.push(t4);
myset7. clone();
myset7.draggable8();
 var paidsoc=myset7.clone().draggable8();
 myset7.setID("paid social");
 
 var myset8=paper1.set();
myset8.push(conclu4);
myset8.push(t5);
myset8. clone();
myset8.draggable9();
 var direct=myset8.clone().draggable9();
 myset8.setID("direct");
 function cloneorg()
 {
 	myset5.clone().draggable6();
 	
 }
 function clonesocorg()
 {
 	myset8.clone().draggable6();
 	
 }
 function clonepaid()
 {
 	myset6.clone().draggable7();
 	
 }
 function clonedirect()
 {
 	myset7.clone().draggable8();
 	
 }
 function clonepaidsocial()
 {
 	myset8.clone().draggable9();
 	
 }
function cloneN(){
	
 myset4.clone().draggable5();
   
   j=1; //flag for No arrow
        }
function cloneD(){
	
 myset4.clone().draggable4();
   
   i=1; //flag for Down arrow
    }
        
function cloneS(){//to clone start
	
 myset.clone().draggable1();
 
   //f=1; //flag for start
        }
function cloneStop(){//to clone start
	
 
 mysetS.clone().draggable0();
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
 myset1.attr({
    cursor: 'pointer',
}).mouseover().mouseout().mouseup(function(e) {
    alert("clicked");
}); 
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
 var arrow=myset3.clone().draggable5();
 myset3.setID("Noarrow");
 
 var myset2=paper1.set();//operation
 myset2.push(rect3);
 myset2.push(text2);
 myset2.draggable2();
 var operation=myset2.clone().draggable2();
 myset2.setID("operation");

	
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
	