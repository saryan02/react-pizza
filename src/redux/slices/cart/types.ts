
export type CartItem = {
    id: string;
    title:string;
    price: number;
    type:string;
    size:number;
    image:string;
    count:number;
}
export interface CartSliceState {
    totalPrice: number;
    categoryId:number;
    items: CartItem[]
}