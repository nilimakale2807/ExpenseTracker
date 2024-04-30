import { createSlice } from '@reduxjs/toolkit';
import * as categories from '../../../AddTransaction/categories.json'

const initialState = {
  transaction: [],
  balance: 0,
  income: 0,
  expense:0,
  category: categories.data
};

const addTransactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transaction.push(action.payload);
      console.log(JSON.stringify(state.transaction))
    },
    getBalance: (state, action) => {
      let balance = 0;
      let income = 0;
      let expense = 0;

      state.transaction.reduce((total,transaction) => {
        if (transaction.type === 'expense') {
         balance = balance - Number(transaction.amount);
         expense += Number(transaction.amount);
        }
        if (transaction.type === 'income') {
          balance = balance + Number(transaction.amount);
          income += Number(transaction.amount);
        }
      }, 0)
      state.balance = balance;
      state.income = income;
      state.expense = expense;
    },
    addCatgory: (state, action) => {
      state.category.push(action.payload);
    }
  },
});

export const { addTransaction, getBalance, addCatgory } = addTransactionSlice.actions;
export default addTransactionSlice.reducer;
