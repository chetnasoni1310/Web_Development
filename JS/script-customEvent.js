//Custom events ko happen krwate hai 

const myCustomEvent  = new Event("Chetna");

document.querySelector("button").addEventListener("Chetna" , function(){
    console.log("Chetna happened");
    alert("Custom Event");
})


document.querySelector("button").dispatchEvent(myCustomEvent);