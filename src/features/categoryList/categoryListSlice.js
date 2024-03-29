import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCategories = createAsyncThunk(
    'categories/getCategories',
    (_, {extra: { client, api }}) => {
        return client.get(api.ALL_CATEGORIES).json()
    }
);

const initialState = {
    list: [],
    status: 'idle',
    error: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCategories.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCategories.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
                console.log(state.error);
            })
            .addCase(loadCategories.fulfilled, (state, action) => {
                state.status = 'fullfilled';
                state.list = action.payload.categories;
            })
    }
});

export const categoriesReducer = categoriesSlice.reducer;
//selectors
export const selectAllCategories = state => state.categories;

