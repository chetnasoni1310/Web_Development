// esa function jo kisi aur function ko return kre 


// A closure is a function that remembers the variables from the scope in which it was created, even after that outer function has finished executing.

// In simpler words:

// Functions in JavaScript carry their lexical environment with them.


function a(){
    var a=23;
    return function(){
        console.log(a);
    }
}

let x=a();
x();

