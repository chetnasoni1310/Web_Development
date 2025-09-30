
var byid=document.querySelector("#a");


var byclass=document.querySelector(".a");


var bytag=document.querySelector("h1");

var btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    console.log('Listener1');
    byid.innerHTML= '<i>Heyaaaaaaa</i>';
})

