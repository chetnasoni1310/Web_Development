// Components hote hai jo ki alg alg jagah hote hai 
// Humein unhe kahin kahin se export krke -- kahin kahin pe import krna hota hai 

//Export

    // Way 1
    //Only for 1 file
    function Cart(){

    };
    export default Cart();
    // import Cart from "./script.js"


     // Way 2
    //Works for multiple file
    export function Cart(){

    }
    export function Abcd(){

    }
    // import {Cart , Abcd} from ""


    