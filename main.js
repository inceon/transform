window.onload = function() {
	var cw = 0,
	 	ch = 0, 
	 	col = 5;
	var image = document.getElementsByClassName('image')[0];
	var text = document.getElementsByClassName('text')[0];
	document.body.addEventListener('mousemove', function($event){
		var elem = {
			width: image.clientWidth / 2,
			height: image.clientHeight / 2
		};
		
		var cursor = {
			width: $event.clientX - elem.width,
			height: $event.clientY - elem.height
		};

		var nw = Math.abs(cw - cursor.width) / col, 
			nh = Math.abs(ch - cursor.height) / col;

		for(
			var i = 0, j = 0;
			i <= col && j <= col;
		) {
			var rotateX = ch / 5 * 0.05;
			var rotateY = cw / 5 * 0.02;
			var translateX = cw * 0.1;
			var translateY = ch * 0.1;

			image.style.transform = 'perspective(400px) rotateX('+ rotateX +'deg) rotateY('+ rotateY +'deg) translateX('+ translateX +'px)  translateY('+ translateY +'px)';
			text.style.transform = 'perspective(900px) rotateX('+ rotateX*2 +'deg) rotateY('+ rotateY*2 +'deg) translateX('+ translateX +'px)  translateY('+ translateY +'px)';

			if(i++ <= col) {
				cw += (cw < cursor.width ? nw : -nw);
			}
			if(j++ <= col) {
				ch += (ch < cursor.height ? nh : -nh);
			}
		}
	})
};