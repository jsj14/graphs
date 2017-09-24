/*the problem of on load display is fixed. The new widgets are getting added on click.
The only issue then was that duplicates are created.
For eg:on clicking start start image will come.Next clicking myoperaton  another start+ myperation comes. 
Fixed that using empty() . Do check if problem still is solved adding more widgets. 
Yours Truly
KP*/  



  var code1="st=>start: Start|past:>http://www.google.com[blank]";
                    var code2 ="\nst->";
          function start (){
            //	var paper = Raphael(700,50,200,400);
			//	var t = paper.text(810, 85, "Start");
  	 		//	var c = paper.rect(790, 70, 50, 30, 10);
  	 		//	var rectPath = paper.path("M10,10L10,90L90,90L90,10Z");
  	  		//	var rectangle=paper.rect(790,110, 50,30).attr("stroke","#000");
  			//	var d=paper.rect(790,150,40,40).rotate(45,790,190);
                var Startbtn = document.getElementById("strt"),
                   // cd = document.getElementById("code"),
                    chart;
              $( ".wrkspace" ).empty();
            
                (Startbtn.onclick = function () {
                	
                       var code=code1+code2; 
                    //var
                    if (chart) {
                      chart.clean();
                    }
                    chart = flowchart.parse(code);
                    chart.drawSVG('canvas',
 {
                      // 'x': 30,
                      // 'y': 50,
                      'line-width': 3,
                      'line-length': 50,
                      'text-margin': 10,
                      'font-size': 14,
                      'font': 'normal',
                      'font-family': 'Helvetica',
                      'font-weight': 'normal',
                      'font-color': 'black',
                      'line-color': 'black',
                      'element-color': 'black',
                      'fill': 'white',
                      'yes-text': 'yes',
                      'no-text': 'no',
                      'arrow-end': 'block',
                      'scale': 1,
                      'symbols': {
                        'start': {
                          'font-color': 'red',
                          'element-color': 'green',
                          'fill': 'yellow'},
                        'end':{
                          'class': 'end-element' }
                   },
                      'flowstate' : {
                        'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                        'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                        'future' : { 'fill' : '#FFFF99'},
                        'request' : { 'fill' : 'blue'},
                        'invalid': {'fill' : '#444444'},
                        'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                        'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                      }
                    });
                    $('[id^=sub1]').click(function(){
                      alert('info here');
                    });
                })();}
            //next widget 
			var concode=0, code3;
			 document.getElementById("rect").addEventListener("click",function(){
				var condcode = prompt("Please enter your operation", "My operation");
						if (condcode != null) { 
							document.getElementById("demo").innerHTML =
						"Hello " + condcode + "! How are you today?";  code3=concode;  }); 
 document.getElementById("rect").addEventListener("click",function(){
	$( ".wrkspace" ).empty();
                  var rectbtn=document.getElementById("rect"), chart;
				(rectbtn.onclick = function () {
					code1 +="\nop1=>operation: My Operation|past\n";
                    code2 += "op1(right)";
                    code=code1+code3+code2;
              if (chart) {
                      chart.clean();
                    }
                    chart = flowchart.parse(code);
                    chart.drawSVG('canvas',
 {					 // 'x': 30,
                      // 'y': 50,
                      'line-width': 3,
                      'line-length': 50,
                      'text-margin': 10,
                      'font-size': 14,
                      'font': 'normal',
                      'font-family': 'Helvetica',
                      'font-weight': 'normal',
                      'font-color': 'black',
                      'line-color': 'black',
                      'element-color': 'black',
                      'fill': 'white',
                      'yes-text': 'yes',
                      'no-text': 'no',
                      'arrow-end': 'block',
                      'scale': 1,
                      'symbols': {
                        'start': {
                          'font-color': 'red',
                          'element-color': 'green',
                          'fill': 'yellow'},
                        'end':{
                          'class': 'end-element' }
                   },
                      'flowstate' : {
                        'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                        'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                        'future' : { 'fill' : '#FFFF99'},
                        'request' : { 'fill' : 'blue'},
                        'invalid': {'fill' : '#444444'},
                        'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                        'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                      }
                    });
                    $('[id^=sub1]').click(function(){
                      alert('info here');
                    });
                })();
            }