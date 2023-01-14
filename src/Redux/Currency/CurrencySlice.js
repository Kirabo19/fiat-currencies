import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCurrencies = createAsyncThunk(
  'fetch/currencies',
  async () => {
    const response = await fetch('https://api.coinstats.app/public/v1/coins');

    const data = await response.json();

    const currencyData = data.coins.map((currency) => ({
      id: currency.id,
      img: currency.icon,
      name: currency.name,
      price: currency.price,
      rank: currency.rank,
      symbol: currency.symbol,
      marketCap: currency.marketCap,
      availableSupply: currency.availableSupply,
      show: false,
    }));
    return currencyData;
  },
);

const initialState = [];

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyReducer: (state, action) => state.map((currency) => {
      if (currency.id === action.payload) {
        return { ...currency, show: true };
      }
      return { ...currency, show: false };
    }),
  },
  extraReducers: {
    [getCurrencies.fulfilled]: (state, action) => action.payload,
  },
});

export const { setCurrencyReducer } = currencySlice.actions;

export default currencySlice.reducer;
