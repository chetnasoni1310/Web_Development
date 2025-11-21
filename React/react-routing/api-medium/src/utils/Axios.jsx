import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://fakestoreapi.com/'
})

export default instance;


//     Pehle hum const api = 'https://fakestoreapi.com/users'
//     and hum const api = 'https://fakestoreapi.com/products'
//     ese krke poora likh rhe the 
//     But ab hum axios ka instance bnaake fir use krenge taki baar baar uska object create naa ho

// Aur hum pehle import bhi     import axios from 'axios'           ese krte the aur ab 
                            //  import axios from '../utils/Axios'  ese krte hai 