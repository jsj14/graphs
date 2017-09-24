


var chart;
  var code1="st=>start: Start|past:>http://www.google.com[blank]";
                    var code2 ="\nst->";
          function start (){
       
                var Startbtn = document.getElementById("run");
        
                (Startbtn.onclick = function () {
                	   var code=code1+code2; 
                 
                 drawdia(code);
                })();
                }
                function drawdia(code){
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
                }
            //next widget 
	function second(){
			   var opco=document.getElementById("operation").value;
			//var p=prompt("Please enter operation","My operation");
			// $("#operation").show()
	 document.getElementById("operation").style.visibility= 'visible' ;
			 $("#operation").on("keydown",function search(e) {
    		if(e.keyCode == 13) {
    			 opco=$(this).val();
    			document.getElementById("operation").style.visibility= 'hidden' ; }
			});
  var rectbtn=document.getElementById("run2"),
				  chart;
	(rectbtn.onclick = function () {
  var rect1='\nop1=>operation: ';
  var rect2='|past\n';
  var rect3='op1(right)';
    code1 +=rect1;
                    code1+=opco;
                    code1+=rect2;
                    code2 += rect3;
                    code=code1+code2;
                    //var
                    drawdia(code);
               })();}

function flowjsonobj() {
    jsonObj = [];
    $("run").bind(function() { var objid = $(this).id();
  							   var rectid=$("#run2").id;
								item = {};
								item ["Widget"] = objid;
									item["North"]="";
									item["South"]=rectid;
									item["East"]="";
									item["West"]="";
   							$(item).each( function pushjson(){
       							 jsonObj.push(item);
     								});
      

    var str=JSON.stringify(jsonObj);
});
}
