

$(function() {

  	    var height = $(window).height()
	    // alert($(window).height())
		if(height > 700){
			footer.style.display = "block";
			return;
		}
			else{
			footer.style.display = "none";
			return;
		}

});

function dis(){
	    var height = $(window).height()
	    // alert($(window).height())
		if(height > 700){
			footer.style.display = "block";
			return;
		}
			else{
			footer.style.display = "none";
			return;
		}


}
function discn(){
	    var height = $(window).height()
	    // alert($(window).height())
		if(height > 827){
			footer.style.display = "block";
			return;
		}
			else{
			footer.style.display = "none";
			return;
		}


}
////////////////////////////radio
			$(document).ready(function(){
			  $('input').iCheck({
			   
			    radioClass: 'iradio_square-green'
			  });
			});