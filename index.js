var main = function ( ) {
    $('.icon-menu').click(function(){
        $('.menu').animate({left:'0px'},200);
        $('body').animate({left:'285px'},850);
        })
    $('.icon-close').click(function(){
        $('.menu').animate({left:'-285px'},850);
        $('body').animate({left:'0px'},200);
        })        
    $('.icon-menu').hover(
        function(){
        $(this).addClass('menu-color')},
        function(){
        $(this).removeClass('menu-color')    
        });
};
    



$(document).ready(main);
    $(document).ready(function(){
        $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 37:
$('.egg').animate({left: "-=10px"}, 'fast');
				break;
			case 38:
$('.egg').animate({top: "-=60px"}, 'fast');
$('.egg').animate({top: "+=60px"}, 'slow');		
				break;
			case 39:
$('.egg').animate({left: "+=10px"}, 'fast');
				break;
            case 40:
 $('.egg').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
})
