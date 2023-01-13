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
      contractAddress: currency.contractAddress,
      decimals: currency.decimals,
      priceBtc: currency.priceBtc,
      priceChange1d: currency.priceChange1d,
      priceChange1h: currency.priceChange1h,
      priceChange1w: currency.priceChange1w,
      totalSupply: currency.totalSupply,
      twitterUrl: currency.twitterUrl,
      volume: currency.volume,
      websiteUrl: currency.websiteUrl,
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
