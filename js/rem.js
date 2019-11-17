
	$(function initFont(){
        var docEl = document.documentElement;   //获取html文档标签
           // 
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

			 recalc = function() {
				        var width = docEl.getBoundingClientRect().width;
							if (width > 5000) { // 最大宽度
								width = 640;
							}
						console.log(width);	
				        var rem = width / 12; 
				        docEl.style.fontSize = rem + 'px';
				     };
			recalc();

		window.addEventListener(resizeEvt, recalc, false);
		document.addEventListener('DOMContentLoaded', recalc, false);
 });
