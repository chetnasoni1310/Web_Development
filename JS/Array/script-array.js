var arr=[1,2,'c',"d",function(){},{},[]];

console.log(arr);
console.log(arr[0]);
console.log(arr[6]);


arr.forEach( function(val){
console.log(val);
})

console.log(typeof(arr[6]));


