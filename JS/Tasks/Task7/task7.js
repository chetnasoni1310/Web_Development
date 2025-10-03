var bar = document.querySelector("#bar");
var h1 = document.querySelector("h1");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var reset = document.querySelector("#reset");


var count=0;
var interval;

start.addEventListener("click", function(){
    interval= setInterval(function(){
        h1.textContent = count;
        bar.style.width = count*5+"%";
        count++;

    } , 500)

    
});


stop.addEventListener("click",function(){
    clearInterval(interval);
});


reset.addEventListener("click",function(){
    h1.textContent=0;
    count=0;
    clearInterval(interval);
    bar.style.width="0%";
})




