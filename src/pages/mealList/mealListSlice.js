import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadMeals = createAsyncThunk (
    'meals/getMeals',
    (name, {extra: {client, api}}) => {
        return client.get(api.getFilteredCategory(name)).json()
    }
);

const initialState = {
    meals: [],
    status: 'idle',
    error: null,
};

const mealListSlice = createSlice({
    name: 'mealList',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(loadMeals.pending, state => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(loadMeals.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || action.error.message;
            console.log(action.error.message);
        })
        .addCase(loadMeals.fulfilled, (state, action) => {
            state.status = 'fullfilled';
            state.meals = action.payload.meals;
        })
    }
});

export const mealListReduser = mealListSlice.reducer;

export const selectAllMeals = state => state.meals;
