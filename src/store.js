import { configureStore } from '@reduxjs/toolkit';
import ky from 'ky';

import { categoriesReducer } from './features/categoryList/categoryListSlice';
import * as api from './config';


export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  // пробуем вместо axios библиотеку ky для работы с fetch и post запросами.
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
