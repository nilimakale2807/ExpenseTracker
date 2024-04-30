import { combineReducers } from '@reduxjs/toolkit';
import addTransactionSlice from './AddTransaction/addTransactionSlice';

export const rootReducer = combineReducers({
    transactions: addTransactionSlice
});

