// Global Scope -- Window
console.log(this);


//Function -- Window
function abcd(){
    console.log(this);
}
abcd();


//Inside a method -- Object
var obj={
    name:function(){
        console.log(this);
    },
    age:22
}
obj.name();








//Func inside a method (es5) -- Window
var obj2={
    name:function(){
        console.log(this);
         function abcd(){
            console.log(this);
         }

         abcd();
    },
    age:22
}
obj2.name();
//  ab ismi problem aagyi yehi ki 
//  jo method ke andar wala this hoga voh object hoga th age ko access kr paayega 
        //but jo double andar wala this hoga voh global h window h toh age ko access nhi kr paayega 
        //see niche wala example
var obj3={
    name:function(){
        console.log(this.age)
         function abcd(){
            console.log(this.age);
         }

         abcd();
    },
    age:22
}
obj3.name();








//Func inside a method (es6) -- Object
//Arrow function this ki value parent se leta haii 
var obj4={
    name:function(){
        console.log(this.age);
        var val=()=>{
            console.log(this.age);
        }
        val();
    },
    age:22
}
obj4.name();




//Constructor func mai this  -- new blank object
// function add(){
//     console.log(this);
// }   
// const ans = new add();


//Event listener -- jis element pe event listener laga hua ho 
// document.querySelector("button")
// .addEventListener(
//     "click" ,
//     function(){
//     console.log(this);
// })


//Call
var obj5={
    name:'chetna'
}
function abcd(){
    console.log(this);
}
abcd.call(obj);
abcd.call(obj,1,2,3);



//Apply
abcd.apply(obj, [1,2,3] );




//Bind
//yeh immediately nhi chalayega aur func ko bind krke ek naye function mai rkh dega 
const baadmaichalayenge = abcd.bind(obj);
baadmaichalayenge();


