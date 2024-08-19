export type SearchPizzaParams = {
    pageCount:string,
    categoryId:string,
    sortType: string,
    search:string

}
export type FetchPizzasArgs = {
    pageCount: number;
    categoryId:number,
    sortType:string,
    search:string
}


export type Pizza = {
    id: string;
    title: string;
    type: string;
    size: number;
    price: number;
    image: string;
    count: number
}



export interface PizzaSliceState {
    items: Pizza[];
}
