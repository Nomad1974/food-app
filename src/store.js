import { configureStore } from '@reduxjs/toolkit';
import ky from 'ky';

import * as api from './config';

import { mealListReduser } from './features/mealList/mealListSlice';
import { categoriesReducer } from './features/categoryList/categoryListSlice'; 
import { visibleReducer } from './components/conteiner/containerSlice';
import { recipeReducer } from './features/recipe/recipeSlice';
import { searchReducer } from './components/search/searchSlice';


const store = configureStore({
  reducer: {
    search: searchReducer,
    categories: categoriesReducer,
    visible: visibleReducer,
    meals: mealListReduser,
    recipe: recipeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  // пробуем библиотеку ky для работы с fetch и post запросами.
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        client: ky,
        api,
      },
    },
    serializableCheck: false,
  })
});

export default store;
