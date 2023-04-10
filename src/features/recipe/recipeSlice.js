import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadRecipe = createAsyncThunk(
    'recipe/getRecipe',
    (id, {extra: {client, api}}) => {
        return client.get(api.getRecipeById(id)).json()
    }
);

const initialState = {
    recipes: [],
    status: 'idle',
    error: null,
};

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadRecipe.pending, state => {
            state.status = 'loading';
            state.error= null;
        })
        .addCase(loadRecipe.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || action.error.message;
            console.log(action.error.message);
        })
        .addCase(loadRecipe.fulfilled, (state, action) => {
            state.status = 'fullfilled';
            state.recipes = action.payload.meals[0];
        })
    }
    
});

export const recipeReducer = recipeSlice.reducer;

export const selectRecipe = state => state.recipe;