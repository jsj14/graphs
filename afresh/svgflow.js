$(document).ready(function(){
	//d3.select("div").append("svg")
// var SVGObj=document.createElementNS(NS,"rect");	
// SVGObj.setAttribute("height",h);
// SVGObj.style.fill="blue";

$(function() {
	$('#svgbasics').svg({onLoad: drawInitial});
	});

function drawInitial(svg) {
	svg.circle(75, 75, 50, {fill: 'none', stroke: 'red', strokeWidth: 3});
	var g = svg.group({stroke: 'black', strokeWidth: 2});
	svg.line(g, 15, 75, 135, 75);
	svg.line(g, 75, 15, 75, 135);
}
$.fn.xml = function() {
    return (new XMLSerializer()).serializeToString(this[0]);
};

$.fn.DOMRefresh = function() {
    return $($(this.xml()).replaceAll(this));
};


// var wrap=$(".rect");
// $(wrap).append('svg.rect(20,50,100,50)');
// $('.rect').svgStyle('fill:yellow');



	// $("#images").click(function(){
		// $("rect").bind('click', function(){
			// svg.rect(20, 50, 100, 50,  
        // {fill: 'yellow', stroke: 'navy', strokeWidth: 5}); 
		// });
		

});


