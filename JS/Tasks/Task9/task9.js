var input = document.querySelector("#intro");
var text;
var error = document.querySelector("h3");
var counter=0;
var maxChars = 6;

input.addEventListener("input",function(elem){
    text = input.value.trim();
    counter = text.length;
    console.log(counter);
    if(counter > maxChars)
    {
       error.style.display='block';
       input.value  = input.value.slice(0,maxChars);
    //    input.disabled = true;
    }
    else
    {
       error.style.display='none';
    //    input.disabled = false; 
    }
});