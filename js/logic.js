let element1 = document.querySelector('#info1');
let element2 = document.querySelector('#info2');
let element3 = document.querySelector('#info3');

let logo1 = document.querySelector('#logo1');
let logo2 = document.querySelector('#logo2');
let logo3 = document.querySelector('#logo3');

let desc1 = document.querySelector('#desc1');
let desc2 = document.querySelector('#desc2');
let desc3 = document.querySelector('#desc3');

let ralla1 =document.querySelector('#ralla1');
let ralla2 =document.querySelector('#ralla2'); 

document.addEventListener('scroll', function(){
    if(element1.getBoundingClientRect().y < window.innerHeight-50){
        logo1.className = 'logo anim_aparecer';
        desc1.className = 'desc anim_aparecer';
    }
    if(element2.getBoundingClientRect().y < window.innerHeight-50){
        logo2.className = 'logo anim_aparecer';
        desc2.className = 'desc anim_aparecer';
    }
    if(element3.getBoundingClientRect().y < window.innerHeight-50){
        logo3.className = 'logo anim_aparecer';
        desc3.className = 'desc anim_aparecer';
    }
    if(ralla1.getBoundingClientRect().y < window.innerHeight-50){
        ralla1.className = 'ralla expan_ralla';
    }
    if(ralla2.getBoundingClientRect().y < window.innerHeight-50){
        ralla2.className = 'ralla expan_ralla';
    }
})
