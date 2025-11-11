// Map and filter mai yahin farak hota hai , 
// We use Map jab humein elements ka count kamm nhi krna ho array se 
// and Filter when humein cheezien kisi condition ke basis pe filter out krna ho 



//Voh elements hata do jo 5 se chote ho 
{let state = [1,2,3,45,6,88,67,335,2];
let answer = state.filter(elem => (elem>5));
state = answer;}


//mujhe ek object array mai se voh saare bande nikaal ke do jo ki male hai 
let state = [
    {name:"Chetna" , gender:'female'},
    {name:"juber" , gender:'male'},
    {name:"jatin" , gender:'male'},
    {name:"jaya" , gender:'female'},
];

let answer = state.filter(elem => (elem.gender === 'male'));
state = answer;