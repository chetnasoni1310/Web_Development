import React, { createContext, useState } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export const UserContext  = createContext();
//Ismai warning aa rhi h kyunki hum alg alg exports kr rhe hai context ka alg , UserContext ka alg , 
//Toh fir solution h ki contextProvider hum alg se bnaaye 
// Error is -->>  
//                     But your file is exporting something that is NOT a component (like a context).
//                     Please keep them in separate files.”


function Context(props) {

   const [user , setUser] = useState([
    {id:0 , name:'Joe Goldberg' , city:'Paris'},
    {id:1 , name:'Katherine' , city:'Mistic Falls'},
    {id:2 , name:'David' , city:'New-York'},
   ])


//    console.log(props);

  return (
   <UserContext.Provider value={ {user , setUser} } >
    {props.children}
   </UserContext.Provider>
  );
}

export default Context
