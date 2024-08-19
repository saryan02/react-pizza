import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {FetchPizzasArgs, Pizza, PizzaSliceState} from "./types";



const initialState: PizzaSliceState = {
    items: []

}


export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',

    async (params: FetchPizzasArgs, thunkAPI) => {
        const {
            pageCount,
            categoryId,
            sortType,
            search
        } = params
        const {data} = await axios.get<Pizza[]>(`https://66155949b8b8e32ffc7aad43.mockapi.io/items?page=${pageCount}&limit=4&${
                categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sortType}&order=desc${search}`
        )

        if (data.length === 0) {
            return thunkAPI.rejectWithValue('ничего нет')
        }
        return thunkAPI.fulfillWithValue(data)

    }
)


const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        // setItems(state, action) {
        //     state.items = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
        })
            .addCase(fetchPizzas.rejected, (_state, action) => {
                console.log(action.payload)
            })

    }
})


//export const {setItems} = pizzaSlice.actions;


export default pizzaSlice.reducer
