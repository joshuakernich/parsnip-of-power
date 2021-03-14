$(function(){

	var p = {x:0,y:0,w:160,h:150,dx:1,dy:1,speed:10};

	function tick(){

		var w = 1024-p.w;
		var h = 768-p.h;

		p.x += p.dx*p.speed*2;
		p.y += p.dy*p.speed;

		if(p.x > w){
			p.x = w;
			p.dx = -1;
		}

		if(p.y > h){
			p.y = h;
			p.dy = -1;
		}

		if( p.x < 0 ){
			p.x = 0;
			p.dx = 1;
		}

		if( p.y < 0 ){
			p.y = 0;
			p.dy = 1;
		}

		$('.screensaver .parsnip').css({left:p.x+'px',top:p.y+'px'});
	}

	setInterval(tick,100);


})