import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState, Sort, SortPropertyEnum} from "./types";




const initialState:FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.RATING
    },

}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue(state, action:PayloadAction<string>){

            state.searchValue = action.payload
        },
        setPageCount(state, action:PayloadAction<number>){
            state.pageCount = action.payload
        },
        setCategoryId(state, action:PayloadAction<number>) {
            state.categoryId = action.payload
        },

        setSort(state, action:PayloadAction<Sort>){

            state.sort ={
                name: action.payload.name,
                sortProperty: action.payload.sortProperty
            }
        },
        setFilters(state, action:PayloadAction<FilterSliceState>){
            state.sort = action.payload.sort
            state.pageCount = Number(action.payload.pageCount)
            state.categoryId = Number(action.payload.categoryId)
        }
    }
})
export const {setSearchValue, setFilters, setPageCount, setCategoryId, setSort} = filterSlice.actions;


export default filterSlice.reducer
