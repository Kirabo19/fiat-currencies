import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './HomeItem';
import { getCurrencies } from '../../Redux/Currency/CurrencySlice';
import Search from './Search';

const HomeList = () => {
  const [query, setQuery] = useState('');

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

  const currencies = useSelector((state) => state.crypto);

  const filteredCurrency = currencies.filter((currency) => (
    currency.name.toLowerCase().includes(query.toLowerCase())
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch, getCurrencies]);

  return (
    <>
      <Search query={query} onSearch={onSearch} />
      <ul className="homeList">
        { filteredCurrency.map((crypto) => <HomeItem key={crypto.id} crypto={crypto} />)}
      </ul>
    </>
  );
};

export default HomeList;
