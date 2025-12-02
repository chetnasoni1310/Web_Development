//Async JS

// 1. setTimeout() - Jab humein code ko kuch time ke baad chalana ho 
setTimeout(function(){
    console.log('Hey');
}, 1000)




// 2. setInterval() - Jab humein code ko kuch der baad chalna ho aur baar baar chalana
//    ho for a particular time interval 
let count = 0;
const interval = setInterval(function(){
    count++;
    console.log('YO');
    if(count === 5)
        clearInterval(interval);
},1000);




// 3. Fetch API - Jab hum kisi URL pe jaake data laayenge , ya fir hum kisi URL pe data
fetch(`https://randomuser.me/api/`)
      .then(rawData => rawData.json())
           .then(res => console.log(res.results[0].gender))
               .catch(err => console.log(err))




// 4. Axios - ye bhi vhi krega jo fetch krega , bss thoda jyada developer friendly hai 
axios.get(`https://randomuser.me/api/`)
           .then(res => console.log(res.data.results[0].gender))
               .catch(err => console.log(err))



// 5. Promise - Iss promise ke andar jo code likhoge voh apna kaam krenge , aur yeh
//               khud jo hai voh side stack mai chala jaayega uss code ko lekar , aur 
//               jab andar se code ke , resolve kra jaayega , tb yeh promise chlega 
const parchi = new Promise(function(resolve , reject){
    fetch(`https://randomuser.me/api/`)
      .then(rawData => rawData.json())
           .then(res => buttonResolver(res))
               .catch(err => reject(err))

function buttonResolver(response){
    let gender = response.results[0].gender;
    if(gender === 'male'){
        resolve();
    }
    else{
        reject();
    }
} 
})
console.log(parchi);
parchi
    .then(console.log('Gender is male'))
    .catch(console.log('Gender is female'))


// 6. CallBack
//    Yeh ek function hai , jise kisi aur function mai as an argument pass krte hai 
//    