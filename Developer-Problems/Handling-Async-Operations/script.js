// Handling Async Operations 

const getUser = document.querySelector('#getUser');


function getNewUser(){
    fetch(`https://randomuser.me/api/`)
  .then(raw => raw.json())
  .then(res => {
    const {name , email , gender , picture} = res.results[0];
    const {first , last} = name;
    console.log(first + " " + last );
    console.log(gender);
    console.log(email);
    console.log(picture.large)

    const fullName = first + " " + last;

    document.querySelector('.cards').innerHTML+= `<div class="card w-64 rounded-md bg-zinc-800 px-2 py-4 min-h-<64>">
           <div class="picture w-28 h-28 rounded-full bg-zinc-700 mb-4 overflow-hidden ">
            <img src=${picture.large} class="w-full h-full object-cover" alt="">
          </div>
          <h3 class="text-3xl">${first}</h3>
          <h3 class="text-md font-medium opacity-70">${gender}</h3>
          <h6 class="text-sm opacity-40">${email}</h6>
          <p class="text-sm font-light mt-5 opacity-80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            saepe incidunt modi perspiciatis unde voluptate eius provident hic,
            in consequuntur.
          </p>
        </div>`;
  })
}

getUser.addEventListener('click' ,()=>{
    getNewUser();
});