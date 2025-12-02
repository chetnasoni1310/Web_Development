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
//    Yeh ek function hai , jise kisi aur 2nd function mai as an argument pass krte
//    hai 
//    Jab hum fir uss 2nd function ko chalayenge , toh fir callback function chalega 

//QUESTION :- User se data mangwao , aur jab aajaye data toh usske name , gender and email ko print krwao 
function getData(url  , callback){

    fetch(url)
      .then(raw => raw.json())
      .then(res => callback(res))
      .catch(err => console.log(err))

}

function kuchkuchWithData(response)
{
    console.log(response.results[0].name.first + " " + response.results[0].name.last);
    console.log(response.results[0].gender);
    console.log(response.results[0].email);
}

getData(`https://randomuser.me/api/` , kuchkuchWithData);




//Async-Await
// Function bnaalo aur uske andar jo mann m aaye voh async code likhdo , 
// Ab jab appn async code likhte hai , toh uske baad wala jo code hai voh pehle chal jata hai , kyunki asyc toh side stack m chala jaata hai 

(async function abcd(){
    let api = await fetch(`https://randomuser.me/api/`) 
    api = await api.json();
    console.log(api.results[0].name.first);
    console.log(api.results[0].email);
})();



//Event loop 
// So basically main stack and side stack are 2 things 
// When things are async or time-taking they wil move to side stack 
// and the sync code moved to main stack 
// after the main stack becomes empty , then only the side stack things started getting executed in the main stack , till then they wait in side stack 
// this all handling of events is done by  ********* event loop *********  in JS 




// Difference between Callback , Promise , Async/Await 
// inn sabse ek ek krke url se data mangwao laao aur data show krwao 

//Callback
function getDatabyCallback(url , callback)
{
    fetch(url)
    .then(raw => raw.json())
    .then(res => callback(res))
    .catch(err => console.log(err))
}

getDatabyCallback(`https://randomuser.me/api/` , (response)=>{
//    console.log(response.results[0]);
   console.log(response.results[0].location.country);
    console.log('By callback')

})



//Promise
let promisePrachi = new Promise(function(resolve , reject){

    fetch(`https://randomuser.me/api/`)
        .then(raw => raw.json())
        .then(res => {
           if(res.results[0].gender === 'male')
            resolve(res);
           else
            reject();
        })
        .catch(err => reject(err))
})
promisePrachi
    .then(response => {
        console.log(response.results[0].picture.large)
        console.log('picture')
    console.log('By promise')

    })
    .catch((err) => {
        console.log('Not resolved' , err);
    })



// Async - Await
async function getDataAsync(url)
{
    let raw = await fetch(url);
    let result  = await raw.json();
    console.log(result.results[0].name.first)
    console.log('By async await')
}

async function torunAsync(){
    await getDataAsync(`https://randomuser.me/api/`);
}

torunAsync();