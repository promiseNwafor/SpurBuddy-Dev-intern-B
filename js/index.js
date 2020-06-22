AOS.init({
    offset: 100,
    duration: 1000
});

setInterval(() => changeSlide('next'), 5000);

changeSlide = direction => {
    const currentImg = $('.active');
    const nextImg = currentImg.next();
    const prevImg = currentImg.prev();

    if (direction === 'next') {
        nextImg.length ? nextImg.addClass('active') : 
            $('.slider .section3').first().addClass('active') 
    }else {
        prevImg.length ? prevImg.addClass('active') :
            $('.slider .section3').last().addClass('active');
    }
    currentImg.removeClass('active');
}

'use strict';

const header = document.querySelector('header');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const ul = document.querySelector('.items-wrapper');
const ser = document.querySelector('.serv');

//Open Header Nav Bar
open.addEventListener('click', ()=>{

    header.classList.remove('header');
    header.classList.add('header-open-menu');
    close.style.display = 'block';
    open.style.display = 'none';
    ul.style.display = 'block'
    ser.style.display  = 'none'

})

//Close Header Nav Bar
close.addEventListener('click', ()=>{

    header.classList.remove('header-open-menu');
    header.classList.add('header');
    close.style.display = 'none';
    open.style.display = 'block';
    ul.style.display = 'none';
    ser.style.display  = 'block'

})
