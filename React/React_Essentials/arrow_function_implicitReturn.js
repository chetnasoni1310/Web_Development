  //Arrow functions
  const func1 = ()=>{

  } 

  //If only 1 parameter
  const func2 = val => {}

  //If only 1 statement
  const func3 = val => console.log("Yo");

  //Implicit return
  //Arrow ke baad no body brackets direct returning thing
  const func4 = () => 14;
  const func5 = () => "chetna"; 

  //If brackets lagane hai toh haath se "return" ese likhna padega
  const func6 = () => {return 2;}

  //If we want to return any object implicitly then 
  const func7 = () => {name:'Chetna' ; age:23};
  func7();
  //The above one is incorrect , it is not treating it as object 
   const func8 = () => ({name:'Chetna' , age:23});
  func8();
  //This is the correct syntax for returning object as implicit return
  //The parentheses () around { ... } tell JavaScript,
  //“This is an expression, not a function body.”
  //So the arrow function implicitly returns that object.

  