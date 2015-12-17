$(function() {
	    var bar = $('#header');
	    var top = bar.css('top');
	    $(window).scroll(function() {
	        if($(this).scrollTop() > 50) {
	            bar.stop().animate({'top' : '-20px'}, 500);
	        } else {
	            bar.stop().animate({'top' : top}, 500);
	        }
	    });
});