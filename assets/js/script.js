$(document).ready(function() {
	$(".index_image").addClass("load"); //
	$(".title_box").addClass("load");
    

    var scrollHeight = jQuery(window).height();
    console.log(scrollHeight);
    $(".as_image_indiv_container_left").each(function(){
        var thisPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var diff = topOfWindow + scrollHeight - 220;
        if (diff > thisPos) {
            $(this).addClass("show_image");
        }
        else{
            $(this).removeClass("show_image");
        }
    });
    $(".as_image_indiv_container_right").each(function(){
        var thisPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var diff = topOfWindow + scrollHeight - 220;
        if (diff > thisPos) {
            $(this).addClass("show_image");
        }
        else{
            $(this).removeClass("show_image");
        }
    });

     $(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() + 30 > $(document).height()) {
			$("#scroll_arrow").fadeOut();
			$("#scroll_message").fadeOut();
		}
		else{
			$("#scroll_arrow").fadeIn();
			$("#scroll_message").fadeIn();
		}

     	var scrollHeight = jQuery(window).height();
     	console.log(scrollHeight);
        $(".as_image_indiv_container_left").each(function(){
            var thisPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var diff = topOfWindow + scrollHeight - 220;
            if (diff > thisPos) {
                $(this).addClass("show_image");
            }
            else{
            	$(this).removeClass("show_image");
            }
        });
        $(".as_image_indiv_container_right").each(function(){
            var thisPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var diff = topOfWindow + scrollHeight - 220;
            if (diff > thisPos) {
                $(this).addClass("show_image");
            }
            else{
            	$(this).removeClass("show_image");
            }
        });

        // $("#scroll_message").each(function(){
        //     var thisPos = $(this).offset().top;
        //     var topOfWindow = $(window).scrollTop();
        //     var diff = topOfWindow + windowHeight - 1400;
        //     if (diff > thisPos) {
        //         $(this).addClass("show_image");
        //     }
        //     else{
        //     	$(this).removeClass("show_image");
        //     }
        // });
    });
});