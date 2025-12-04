import { buyBook } from "./BookTypes"

const initialState  = {
    noOfBoooks : 20,
}

function BookReducer(state = initialState , action){
    console.log('switch run ' , state , action)
    switch(action.type)
    {
        case buyBook : 
        console.log('buy')
             return {
                ...state , 
                noOfBoooks : state.noOfBoooks - 1,
             }
        
        default:
            return state;     
    }
}

export default BookReducer;