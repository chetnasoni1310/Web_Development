// Generator functions --> These are advance level and important JS concept 
//  These are special type of functions that can  -- PAUSE execution
//                                                -- RESUME LATER 
//                                                -- return multiple values over time  
//                               instead  of running just once




// A generator is a special function that can pause and resume execution using yield. It returns an iterator, supports lazy evaluation, two-way data flow via .next(value), and is used in Redux-Saga, streaming, pagination, and state machines.


//Normal Function :-
function sum(a , b)
{
    return a+b;
    return b+a; // This is unreachable code 
}




//Generator Functions :-
function* sum(a , b)
{
    yield 20;
    yield 30;
}

const iterator = sum();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// ab first ka o/p - value : 20 and done : false      --->> done is false because it paused the exectution , it is not finished yet
// ab second ka o/p - value : 30 and done : false       --->> done is false because it paused the exectution , it is not finished yet
// ab first ka o/p - value : undefined and done : true -->>> Kyunki ab saare return yields khtm ho chuki hai !!  
// ab first ka o/p - value : undefined and done : true -->>> Kyunki ab saare return yields khtm ho chuki hai !! 




// CONCEPT ::-
// done: false does NOT mean “more values are guaranteed after this”.
// It means:
// “The generator function has NOT finished execution yet.”
// A generator is considered finished only when it hits:
// the end of the function, OR
// a return statement
// Not when it simply yields a value.


// Question :-
function* g() {
  yield 1;
  return 2;
  yield 3;
}

const it = g();

console.log(it.next());
console.log(it.next());
console.log(it.next());


// Output :-

// { value: 1, done: false }
// { value: 2, done: true }
// { value: undefined, done: true }


//Explanation :-
// now here the 2nd output will have value 2 bacuse it is returning 2 and done as true because it is not a yielding function it is returning one , so the return statement will completely terminate the function execution
// and after that , the rest yield will have value undefined because function is stopped executed can't yield anything and the done is true    Any next() after completion → always { value: undefined, done: true }


//Question
function* tricky() {
  let x = 1;
  x += yield x;
  yield x;
}

const it2 = tricky();

console.log(it2.next());
console.log(it2.next(5));
console.log(it2.next());

//O/P
// { value: 1, done: false }
// { value: 6, done: false }
// { value: undefined, done: true }


//Explanation
// yield x → yields 1
// x += 5 → x = 6, then yield x → yields 6
// Generator ends → done: true
