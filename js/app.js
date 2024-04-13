'use strict'


const main = document.querySelector('.main-box'),
input = document.querySelectorAll('input'),
p = document.querySelectorAll('p')



// .item:nth-child(1):has(input[type="radio"]:checked) > .card-name,
// .item:nth-child(2):has(input[type="radio"]:checked) > .card-name,
// .item:nth-child(3):has(input[type="radio"]:checked) > .card-name

main.addEventListener('click', ()=>{
    input.forEach(element => {
        console.log(element.parentElement);
       if (element.checked) {
        element.parentElement.style.background = 'rgb(55, 175, 239)'
       } else{
        element.parentElement.style.background = '#fff'
       }
       
    });
})

input.forEach(el => {
    el.style.display = 'none'
})