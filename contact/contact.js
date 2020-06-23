'use strict';

const header = document.querySelector('header');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const ul = document.querySelector('.list-items-wrapper');
const contact = document.querySelector('.contact');

//Open Header Nav Bar
open.addEventListener('click', ()=>{

    header.classList.remove('header-contact');
    header.classList.add('header-contact-open-menu');
    close.style.display = 'block';
    open.style.display = 'none';
    ul.style.display = 'block'
    contact.style.display  = 'none'

})

//Close Header Nav Bar
close.addEventListener('click', ()=>{

    header.classList.remove('header-contact-open-menu');
    header.classList.add('header-contact');
    close.style.display = 'none';
    open.style.display = 'block';
    ul.style.display = 'none';
    contact.style.display  = 'block'

})