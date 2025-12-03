// Local storage ek esa space hai browser mai jismai hum data store kr skte hai , aur voh humesha store hi rehta hai until and unless tum khud ussey bhaga naa do vha se , baki toh chahe kuch bhi kro usko koi frk nhi padta hai chahe refresh krlo , brower band krlo , shutt down krlo yaarrrrrr  kuch bhi xyz  krlooooooo buttttttttt only manual deletion will delete it

// ab noow the question arises is ki ls browser ka hota hai yaa fir website ka ??
// And the answer is --->> vaise toh ls browser ka hota hai but data voh website ke naam se store krta hai

// task --> ek esa button bnao jisse aap user block krdo , ab jab bhi wo website khole use screen par blocked dikhe , nahi toh website show ho and ek button jisse voh unblock ho

const userStatus = document.querySelector("#userStatus");
const status = document.querySelector("#status");


const block = document.querySelector(".block");
const unblock = document.querySelector(".unblock");


block.addEventListener("click", function () {
  localStorage.setItem("block", true);
  showStatus();
});

unblock.addEventListener("click", function () {
  localStorage.setItem("block", false);
  showStatus();
});

function showStatus(){
  if(localStorage.getItem('block') === 'false')
  status.innerHTML= 'Un-Blocked';
  else
  status.innerHTML= 'Blocked';
}
showStatus();


