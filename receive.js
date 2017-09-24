	$(document).ready(function() {
	//var client="var imageURL;var additionalParameters={CUSTOM_ACCESS_MODES_BY_REFERRER:\{SOCIAL_ORGANIC:[\"facebook.com\",\"twitter.com\",\"pinterest.com\",\"instagram.com\",\"tumblr.com\",\"plus.google.com\",\"plus.url.google.com\",\"youtube.com\"]\}};var p = /^http:/.test(document.location) ? 'http' : 'https';var result =new IQSeoTag(REFERRER_URL,CURRENT_URL,null,additionalParameters);result.Utils.tolowercaseCurrentPageParamsKeys();var referrerDomain;var host=CURRENT_URL.split(\"//\");var hostDomain=host[1].split(\"?\")[0];";	
	var client="Adidas";

 form =  $("<form></form>");
      new_obj =  $("<input name='str' type='hidden'></input>");
      new_obj.val(client);
      form.append(new_obj);
      

jQuery.ajax({
          url: "index.2.html",	
          
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
                         document.getElementById("demo4").innerHTML=res[1];
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