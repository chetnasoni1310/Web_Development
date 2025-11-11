//Map and Filter 
//Dono hi array pe chalte hai kuch kuch perform krte h uske saath and "naya array return kr dete hai "



let arr = [1,2,3,4,5];
// MAp - Array pe kuch karo and naya array return krdo
//Ab jaise foreach chlta hai vaise hi map bhi chlega 
arr.forEach(()=>{
});
arr.map(()=>{
});



//Map ke andar return karne se hi elements naye array mai place hote hai 
arr.map( val => val*12 );



// ************ Dekho map sunte hi aapke mind mai ek blank array aana chahiye 
// ab humare paas ek state hai (jo ki array hai) hum uske saare elements mai +1 karna chahte hai , ab directly toh nhi kr skte  na react mai updation , toh fir hum kya krenge ki --
// state ppe map chalayenge uske elem pe +1234 add krenge and return krenge toh voh naaye array mai bharta jaayega 
//Like this --
{let state = [1,2,3,4,5];
//then -->  state.map(element => element + 1234);
let answer = state.map(element => element + 1234);
state = answer;}
//Changed successfully



//ek array hai , voh saare numbers jo ki 5 se bade hai unmai +5 krdena  and baki vaise ke vaise rkh dena 
{
    let state = [1,2,3,4,5,6,7,8,9,10];
    let answer = state.map(element => (element > 5)?element+5 :element);
    state = answer;
}