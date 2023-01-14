import { configureStore } from '@reduxjs/toolkit';
import CurrencyReducer from './Currency/CurrencySlice';

export default configureStore({
  reducer: {
    crypto: CurrencyReducer,
  },
});
