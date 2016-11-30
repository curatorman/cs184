$(document).ready(function() {
    function show_image(elem) {
        var scrollHeight = jQuery(window).height();
        $(elem).each(function(){
            var currPos = $(this).offset().top;
            var top = $(window).scrollTop();
            var diff = top + scrollHeight - 220;
            if (diff > currPos) {
                $(this).addClass("show_image");
            }
            else{
                $(this).removeClass("show_image");
            }
        });
    }
    show_image(".as_image_indiv_container_left");
    show_image(".as_image_indiv_container_right");
    $(".index_image").addClass("load");
    $(".title_box").addClass("load");

     $(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() + 30 > $(document).height()) {
			$("#scroll_arrow").fadeOut();
			$("#scroll_message").fadeOut();
		}
		else{
			$("#scroll_arrow").fadeIn();
			$("#scroll_message").fadeIn();
		}
     	show_image(".as_image_indiv_container_left");
        show_image(".as_image_indiv_container_right");
    });
});