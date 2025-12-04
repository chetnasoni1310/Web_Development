import { buyBook as buy_book } from "./BookTypes"

export function purchaseBook(){
    console.log('purchas');
    return {
        type : buy_book,
    }
}

