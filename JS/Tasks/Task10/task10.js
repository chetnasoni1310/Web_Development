var progress = document.querySelector(".progress");

window.addEventListener("scroll",function(){
    var scrollTop = window.scrollY;
    var documentHeight = document.body.scrollHeight - window.innerHeight ;
    var scrollPercent = (scrollTop / documentHeight)*100;
    progress.style.width=scrollPercent+"%";
});