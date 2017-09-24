 var code1="st=>start: Start|past:>http://www.google.com[blank]";
                    var code2 ="\nst->";
                     var chart; 
                     function drawdiagram(code){
                    chart = flowchart.parse(code);
                    chart.drawSVG('canvas',
 {	 'line-width': 3,
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
                }
         
          function start (){
    var Startbtn = document.getElementById("run");
              $(".wrkspace").empty();
     (Startbtn.onclick = function () {
               var 	code=code1+code2; 
                	 drawdiagram(code);
      })();}
      function second(){
      	 $(".wrkspace").empty();
      	 //document.getElementById("run2").
      	 var p=prompt("Please enter your operation", "My operation");
      	 var rectbtn=document.getElementById("run2");
  			var rect1='\nop1=>operation:'+p+'|past\n';
		   var rect2= 'op1(right)'; 
      	 		code1=code1+rect1;
				code2=code2+rect2;
		
			 (rectbtn.onclick=function(){
			 	var code=code1+code2;
			 	 drawdiagram(code);
			 })
			 ();
						
					
			}		
					
						
					
					//document.getElementById("demo").innerHTML()
        
		
		
                    
 