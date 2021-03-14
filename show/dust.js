$(function(){

	var w = 800;
	var h = 600;

	for(var i=0; i<20; i++){
		var s = 3+Math.random()*10;
		$('<div class="particle">')
		.appendTo('.dust')
		.data({x:Math.random()*w,y:Math.random()*h,dx:-5+Math.random()*10,dy:2})
		.css({width:s,height:s})
	}

	function step(){
		$('.particle').each(function(){
			var d = $(this).data();

			if(d.dx > 3 || d.dx < -3) d.dx *= 0.95;
			else d.dx *= 0.9+Math.random()*0.2;

			if(d.dy > 3) d.dy *= 0.95;
			else if(d.dy < 0.5) d.dy *= 1.05;
			else d.dy *= 0.9+Math.random()*0.2;

			d.x += d.dx;
			d.y += d.dy;
			if(d.y>h) d.y = 0;
			if(d.x>w) d.x = 0;
			if(d.x<0) d.x = w;
			$(this).css({left:d.x,top:d.y});
		})
	}

	setInterval(step,50);
})