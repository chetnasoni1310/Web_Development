{
    let obj = {name:'chetna' , age:22};
    //Now if i want to use obj.age a lot of times in my code this is increasing my code spacing , 
    //so , what i will do is ki 
    //mai age ko iss object se bahar nikaalungi 
    
    // In objects
    // let {jisko bahar nikaalna ho ex: {age}} = jis object se nikaalna ho ex: obj
    let {age} = obj;


    //In arrays
    // let [jisko bahar nikaalna ho ex: {age}]= jis array se nikaalna ho ex: arr
    let arr = [1, 2, 3, 4, function() { console.log('Hi'); }, {}, []];
    let [a, b, c, d, myFunc] = arr;
    myFunc();  //instead of arr[4]
    //OR
    const arr2 = [1, 2, 3, 4, function() { console.log('Hi'); }, {}, []];
    const [,,,, meriMarzi] = arr; // commas skip elements 0-3
    meriMarzi(); // works fine
    

    //************* BUT In objects
    //We can't choose the variable name ourselves , it should be the one that is used in the object itself
    //Array Destructuring		Just name them as you like (order matters)
    //Object Destructuring   	Use key: newName syntax
    //To rename it according to us --> we must use this ->>
    let obj2 = { name: 'Chetna', age: 22 };
    const { age: myAge } = obj2; // rename key

    //USE
    let obj3 = { name:"Chetna" , 
                 social : {
                    facebook : {
                        first:"Yoyo",
                        second  : "Yuyu"
                    }
                 }
    }
    //Now agar mujhe second ko access krna hota toh mai 
    obj3.social.facebook.second ;
    //ese likhti but i know destructuring so i will use it like
    let {second : secondAccount} = obj3.social.facebook;
}