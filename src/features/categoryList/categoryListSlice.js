import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadCategories = createAsyncThunk(
    'categories/loadCategories',
    (_, {extra: {client, api}}) => {
        return client.get(api.ALL_CATEGORIES)
    }
);

const initialState = {
    status: 'idle',
    error: null,
    entities: [],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCategories.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCategories.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(loadCategories.fulfilled, (state, action) => {
                state.status = 'recieved';
                state.entities = action.payload;
            })
    }
});

export const categoriesReducer = categoriesSlice.reducer;
//selectors
export const selectAllCategories = state => state.categories.entities;