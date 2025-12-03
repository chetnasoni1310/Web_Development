const btn = document.querySelector('.btn');
const tooltip = document.querySelector('.tooltip');

btn.addEventListener('mouseenter' , ()=>{
    tooltip.style.display = 'initial';
})


btn.addEventListener('mouseleave' , ()=>{
    tooltip.style.display = 'none';
})