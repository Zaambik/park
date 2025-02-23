import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import productsReducer from './slices/products/products.slice';
import oneProductReducer from './slices/products/oneProduct.slice';
import deleteProductReducer from './slices/products/deleteProduct.slice';
import addProductReducer from './slices/products/addProduct.slice';
import amountProductReducer from './slices/products/amountProduct.slice';
import editProductReducer from './slices/products/editProduct.slice'

import newsReducer from './slices/news/news'

import authReducer from './slices/auth/auth.slice';

import usersReducer from './slices/users/users.slice';
import oneUserReducer from './slices/users/oneUser.slice';
import deleteUserReducer from './slices/users/deleteUser.slice';
import addUserReducer from './slices/users/addUser.slice';
import editUserReducer from './slices/users/editUser.slice';


export const store = configureStore({
   reducer: {
      products: productsReducer,
      oneProduct: oneProductReducer,
      deleteProduct: deleteProductReducer,
      addProduct: addProductReducer,
      amountProduct: amountProductReducer,
      editProduct: editProductReducer,

      news: newsReducer,
      
      users: usersReducer,
      oneUser: oneUserReducer,
      deleteUser: deleteUserReducer,
      addUser: addUserReducer,
      editUser: editUserReducer,

      auth: authReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
