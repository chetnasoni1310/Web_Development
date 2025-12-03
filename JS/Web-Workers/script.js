// Web - Workers

// Usually humara poora code ek hi thread pe chlta h (single threaded) par kai baar kuch bade calculations perform krne pad jaate hai jiski vjh se humara main thread h voh bhot busy ho jata h yaa fir wo kaafi jyada loaded ho jata hai aur humare baaki ke tasks ki performance kamm ho jaati hai 

// To handle this situation we use web workers 
// Appn chahe toh apna koi task web worker ko bhej skte hai voh jaakr dusre thread mai apna kaam perform krega and aapka main thread thoda efficiently baaki cheexo ko handle kr paayega 


// var nums = Array.from({length : 10000} , (_,b) => b+1);
// Mostly cases mai _ likha hota hai kyunki undefined hai kya frk padta hai baaki iss method ke baare mai dekh lena kabhi


var nums = Array.from({length : 10000} , (a,b) => b+1);

const worker = new Worker('worker.js');

worker.postMessage(nums);

worker.onmessage = (answer) => {
    console.log(answer);
    console.log(answer.data);
}