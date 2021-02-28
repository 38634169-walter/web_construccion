
$(document).ready(menu_responsive);


function menu_responsive(){
    
    $('.btn-hamburger').click(menu_aparecer);
    $('.cruz-icon').click(menu_desaparecer);
    
    if ($(window).width() <= 800){ 
        $('.top').click(menu_desaparecer);
        $('section').click(menu_desaparecer);
        $('footer').click(menu_desaparecer);
        $('.btn-mn').click(menu_desaparecer);
    }
    
}


function menu_aparecer(){
        
    $('nav').css({"left":"0"});
    $('.btn-hamburger').css({"display":"none"});
    $('.cruz-icon').css({"display":"block"});   
}    


function menu_desaparecer(){
    
    $('nav').css({"left":"-100%"});
    $('.btn-hamburger').css({"display":"block"});
    $('.cruz-icon').css({"display":"none"});    
}
