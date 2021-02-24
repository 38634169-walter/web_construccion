$(document).ready(animaciones);

let indice=0;
let indice1=0;
let indice2=0;

function animaciones(){
    $('#botonoes-color button').eq(indice).css({'background':'rgb(247, 113, 17)'});
    $('#botonoes-color button').click(function(){
        indice = $(this).index();
        $('#botonoes-color button').css({'background':'white','color':'black'});
        $('#botonoes-color button').eq(indice).css({'background':'rgb(247, 113, 17)','color':'white'});
    });

    $('#paginacion1 li').eq(indice1).css({'background':'rgb(247, 113, 17)'});
    $('#paginacion1 li').click(function(){
        indice1 = $(this).index();
        $('#paginacion1 li').css({'background':'rgba(0, 0, 0, 0.39)'});
        $('#paginacion1 li').eq(indice1).css({'background':'rgb(247, 113, 17)'});
    });

    $('#paginacion2 li').eq(indice2).css({'background':'rgb(247, 113, 17)'});
    $('#paginacion2 li').click(function(){
        indice2 = $(this).index();
        $('#paginacion2 li').css({'background':'rgba(255, 255, 255, 0.76)','color':'black'});
        $('#paginacion2 li').eq(indice2).css({'background':'rgb(247, 113, 17)','color':'white'});
    });

}