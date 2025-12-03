onmessage = function(data){
console.log(data.data);
const sum = data.data.reduce( (acc , currValue) => {
      acc += currValue;
      return acc;
} , 0);

postMessage(sum);
}