//Now we expect that if we remove from arr2 it will get the last element popped out 
//But in actual the arr Array will also show the same behaviour as arr2
{
    let arr = [1,2,3,4];
    let arr2= arr;
    arr2.pop();
}


//react mai humare paas ek state naam ki cheeck hoti hai 
//kisi bhi state ko direct mutate nhi kr skte hai hum apni marzi se usmai jod tod nhi kr skte hai 
//react will not allow that
{
  let state = [1,2,3];
  state.pop();
  //we can pop out of this state because state is immutable 
}


//Ways for changing the immutable states in the js
//Way 1
{
    let state = [1,2,3];
    state = [1,2];
}


//for copying and mutating arrays we have to 
//Way 2
{
    let arr1=  [1,2,3,4,5,'apple'];
    let arr2 = [...arr1];
    arr2.pop();
    arr1 = arr2;
    //Pehle uski copy bnayenge fir usmai se pop krenge aur fir dobara reference equal krenge 
}

//Way 3
{
    let state = {name:'harsh',age:24};
    // state.name = 'Yoyo';  -->> Ab yeh mai react mai nahi kr paungi (Direct mutation is not allowed)
    let copy = {...state};
    copy.name = 'harshita';
    state = copy;
    copy.name = 'Yupp';
}