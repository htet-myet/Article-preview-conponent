"use strict";

const btnShare = document.querySelector(".share");
const icons = document.querySelector(".icons");
const span = document.querySelector("span");
const section = document.querySelector('section');
const share = document.querySelector('.share');



btnShare.addEventListener('click',()=>{
    if(icons.classList.contains('hidden')){
        icons.classList.remove('hidden');
        span.classList.remove('hidden');
        share.style.border = '1px solid hsl(210, 46%, 95%)';
       
    }else{
        icons.classList.add('hidden');
        span.classList.add('hidden');
    }
}) 
