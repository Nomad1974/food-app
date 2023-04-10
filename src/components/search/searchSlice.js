import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
    searchName: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setSearchName: (state) => {
            state.searchName = state.searchValue;
        },
        clearControls: () => initialState,
    } 
    
});

export const searchReducer = searchSlice.reducer;

export const {setSearchValue, setSearchName, clearControls} = searchSlice.actions;

export const selectSearch = state => state.search;
// filter for the name searchпроверяем в каталоге наличие strCategory сходной с поисковым значением
export const selectVisibleCategories = (state, {searchName}) => {
    return state.categories.list.filter(
        category => (
            category.strCategory.toLowerCase().includes(searchName.toLowerCase())
        )
    )
};
