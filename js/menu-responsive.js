
$(document).ready(menu_responsive);


function menu_responsive(){
    
    $('.btn-hamburger').click(menu_aparecer);
    $('.cruz-icon').click(menu_desaparecer);
    $('.btn-mn').click(menu_desaparecer);
    

    function menu_aparecer(){
        
        $('nav').animate({
            left:'0'
        });
        $('.btn-hamburger').toggleClass('remove');
        $('.cruz-icon').toggleClass('show');         
    }

    function menu_desaparecer(){
        
        $('nav').animate({
            left:'-100%'
        });
        $('.cruz-icon').toggleClass('show');
        $('.btn-hamburger').toggleClass('remove');      
    }
    
}

