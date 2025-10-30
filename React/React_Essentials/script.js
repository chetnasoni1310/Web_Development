// kisi bhi state ko direct mutate nhi kr skte hai hum apni marzi se usmai jod tod nhi kr skte hai 
//react will not allow that


//for copying and mutating arrays we have to 
{
    let arr1=  [1,2,3,4,5,'apple'];
    let arr2 = [...arr1];
    arr2.pop();
    arr1 = arr2;
    //Pehle uski copy bnayenge fir usmai se pop krenge aur fir dobara reference equal krenge 

}