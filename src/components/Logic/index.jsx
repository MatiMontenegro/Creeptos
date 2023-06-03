import React, { useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoWalletData, addLocalCurrency, buyCrypto, exchangeCrypto, extractLocalCurrency, convertCryptoToCurrency } from '../../store/Actions';

const CoinWallet = () => {
  const localCurrency = useSelector(state => state.localCurrency);
  const cryptoWallet = useSelector(state => state.cryptoWallet);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch and update crypto wallet data from API
    dispatch(fetchCryptoWalletData());
  }, [dispatch]);

  const handleAddLocalCurrency = (amount) => {
    if (amount > 0) {
      dispatch(addLocalCurrency(amount));
    }
  };

  const handleBuyCrypto = (cryptoId, amount) => {
    if (amount > 0 && localCurrency >= amount) {
      dispatch(buyCrypto(cryptoId, amount));
    }
  };

  const handleExchangeCrypto = (fromCryptoId, toCryptoId, amount) => {
    dispatch(exchangeCrypto(fromCryptoId, toCryptoId, amount));
  };

  const handleExtractLocalCurrency = (amount) => {
    if (amount > 0 && localCurrency >= amount) {
      dispatch(extractLocalCurrency(amount));
    }
  };

  const handleConvertCryptoToCurrency = (cryptoId, amount) => {
    dispatch(convertCryptoToCurrency(cryptoId, amount));
  };

  return (
    <View>
      <Text>Local Currency: {localCurrency}</Text>
      <TextInput
        placeholder="Enter amount to add"
        keyboardType="numeric"
        onChangeText={handleAddLocalCurrency}
      />
      {/* Render input and button for buying crypto */}
      {/* Render input and button for exchanging crypto */}
      <TextInput
        placeholder="Enter amount to extract"
        keyboardType="numeric"
        onChangeText={handleExtractLocalCurrency}
      />
      {/* Render input and button for converting crypto to local currency */}
    </View>
  );
};

export default CoinWallet;
