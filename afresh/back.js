
	var code1="st=>start: Start|past:>http://www.google.com[blank]";
                    var code2 ="\nst->";
	document.getElementById("run").addEventListener("click", function(){
                var Startbtn = document.getElementById("run"),
                    chart;
          $( ".wrkspace" ).empty();
            (Startbtn.onclick = function () {
    var code=code1+code2; 
                    if (chart) {
                      chart.clean();
                    }
                    chart = flowchart.parse(code);
           chart.drawSVG('canvas',
 { // 'x': 30, // 'y': 50,
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
                })();});
            //next widget 
			var opcode="";
    document.getElementById("run2").addEventListener("click", function(){
			opcode = prompt("Please enter your operation", "My operation");
						if (opcode != null) {
					document.getElementById("demo").innerHTML =
						"Hello " + opcode + "! How are you today?";  }});
    document.getElementById("run2").addEventListener("click", function(){
    $( ".wrkspace" ).empty();
                 var rectbtn=document.getElementById("run2"),
				  chart;
				
				(rectbtn.onclick = function () {
					  code1 +="\nop1=>operation:";
                    code2 += "op1(right)";
                    code=code1+opcode+code2;
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
                })();
                
            });
	document.getElementById("run3").addEventListener("click", function(){
    var condcode = prompt("Please enter your condition", "My condition");
						if (condcode != null) {
					document.getElementById("demo").innerHTML =
						"Hello " + condcode + "! How are you today?";  }};
			$( ".wrkspace" ).empty();
                  var condbtn=document.getElementById("run2"),
				  chart;
					
				(condbtn.onclick = function () {
                    code1 +="\n cond=>condition: Yes or No?|approved:>http://www.google.com\n";
                    code2 += "->cond";
                    code=code1+code2;
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
                })();
                
            });