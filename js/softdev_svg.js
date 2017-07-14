function Curve(texts, colors, fonts, size, outlines, shapes, shapesizes){
	if (SVG.supported) {
		var shape = Number(shapesizes) * 30,
			height = 305 - shape,
			curve = (Math.abs(Number(shapesizes)) * 1.14 + 35).toString();

		var draw = SVG('drawing')
		var text = draw.text(function(add) {
		  	add.tspan(texts).fill(colors)
		})
		text
		  	.path('M55 300 Q 250 '+height.toString()+' 455 300').attr('x',curve+'%')
		  	.font({ size: size, family: fonts, 'text-anchor': 'middle'});
	} else {
	    alert('SVG not supported')
	}
	$("#detail").val($("#drawing").html());
}