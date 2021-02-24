let animationsOne = document.querySelectorAll('.animacionOne');
let animationsTwo = document.querySelectorAll('.animacionTwo');
let animationsThree = document.querySelectorAll('.animacionThree');
let animationsFour = document.querySelectorAll('.animacionFour');
let animationsFive = document.querySelectorAll('.animacionFive');

function mostrar_animaciones(){
    
    let scrollTop = document.documentElement.scrollTop;

    for(var i = 0; i < animationsOne.length + animationsTwo.length + animationsThree.length + animationsFour.length + animationsFive.length ; i++){
        let scrollAnimationOne = animationsOne[i].offsetTop;
        let scrollAnimationTwo = animationsTwo[i].offsetTop;
        let scrollAnimationThree = animationsThree[i].offsetTop;
        let scrollAnimationFour = animationsFour[i].offsetTop;
        let scrollAnimationFive = animationsFive[i].offsetTop;
        
        if (scrollAnimationOne - 800 < scrollTop){
            animationsOne[i].classList.add("added1");
        }
        if(scrollAnimationTwo - 800 < scrollTop){
            animationsTwo[i].classList.add("added2");
        }
        if(scrollAnimationThree - 800 < scrollTop){
            animationsThree[i].classList.add("added3");
        }
        if(scrollAnimationFour - 800 < scrollTop){
            animationsFour[i].classList.add("added4");
        }
        if(scrollAnimationFive - 800 < scrollTop){
            animationsFive[i].classList.add("added5");
        }
    }
}

window.addEventListener('scroll',mostrar_animaciones);
