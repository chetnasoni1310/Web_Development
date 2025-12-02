// Return only active users:
const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];
console.log(users.filter((item) => item.active));



// Calculate total cart value:
const cart = [
  { price: 100, qty: 2 },
  { price: 50, qty: 3 }
];
const ans = cart.reduce( (totalCartValue , currObj , index , cart) => {
    totalCartValue += currObj.price * currObj.qty;
    return totalCartValue;
} ,0)
console.log(ans)


// Remove duplicates:
const nums = [1,2,2,3,4,4,5];
const unique = nums.reduce( (uniqueArray , currItem) => {
    if(! uniqueArray.includes(currItem) )
        uniqueArray.push(currItem);

    return uniqueArray;
} ,[])
console.log(unique);



// Sort users by age (ascending):
// ⚠ Must NOT mutate original array.
const user = [
  {name:"A", age:30},
  {name:"B", age:20},
  {name:"C", age:25}
];
const sortedUser = [...user].sort((a , b) => a.age - b.age);
console.log(sortedUser);


// Convert this into an object keyed by id:
const arr = [
  {id:1, name:"X"},
  {id:2, name:"Y"}
]
const obj = arr.reduce((newObj , currObj) => {
   newObj[currObj.id] = currObj ;
   return newObj;
} ,{})
console.log(obj);



// Group users by role:
const arr2 = [
  {name:"A", role:"admin"},
  {name:"B", role:"user"},
  {name:"C", role:"admin"}
]
const newObj = arr2.reduce((obj , currObj) => {
    if(! obj[currObj.role])
      {
        obj[currObj.role] = [];
      }
    obj[currObj.role].push(currObj);
     return obj;
} , {});
console.log(newObj);


