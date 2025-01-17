import {calcTotalPrice} from "./calcTotalPrice";
import {CartItem} from "../redux/slices/cart/types";

export const getCartFromLS = () =>{
    const data = localStorage.getItem('cart');
    const items:CartItem[] = data? JSON.parse(data):[];
    const totalPrice = calcTotalPrice(items)

        return {
            items,
            totalPrice
        }


}