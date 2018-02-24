$(document).ready(function(){
    $("p").hover(function(){
        $(this).css("background-color", "yellow").addClass("animated tada");
        }, function(){
        $(this).css("background-color", "pink");
    });
	 $(".round-corners").hover(function(){
        $(this).addClass("animated tada");
    });
	 $(".main-name").hover(function(){
        $(this).addClass("animated shake");
    });
	$(".under-name").hover(function(){
        $(this).addClass("animated rubberBand");
    });
	$(".img-title, .bottom-title").hover(function(){
        $(this).addClass("animated lightSpeedIn");
    });
});