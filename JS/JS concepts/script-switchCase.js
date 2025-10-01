// It follows strict comparison " === "

let x = 34;
switch(x)
{
    case 34: console.log("Happy ");
             break;
    case 43: console.log("Happy ");
             break;
    default: break;                    
}



let y = 5*(9-6);
switch(y)
{
    case 43: console.log("Happy ");
             break;
    case 15: console.log("Sad ");
             break;
    default: break; 
}



let z=1;
switch(true)
{
    case (z>2):console.log("Happy ");
               break;
    case (z==2):console.log("Sad ");
               break;  
    default:  console.log("Neither ");
               break;                     
}