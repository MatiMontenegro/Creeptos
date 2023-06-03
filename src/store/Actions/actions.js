// Action types
export const FETCH_CRYPTO_WALLET_DATA = 'FETCH_CRYPTO_WALLET_DATA';
export const ADD_LOCAL_CURRENCY = 'ADD_LOCAL_CURRENCY';
export const BUY_CRYPTO = 'BUY_CRYPTO';
export const EXCHANGE_CRYPTO = 'EXCHANGE_CRYPTO';
export const EXTRACT_LOCAL_CURRENCY = 'EXTRACT_LOCAL_CURRENCY';
export const CONVERT_CRYPTO_TO_CURRENCY = 'CONVERT_CRYPTO_TO_CURRENCY';

// Action creators
export const fetchCryptoWalletData = () => {
return async (dispatch) => {
    try {
      // Make API request to fetch crypto wallet data
      const response = await fetch('https://api.coingecko.com/api/v3/your-crypto-wallet-data-endpoint');
      const data = await response.json();
      dispatch({ type: FETCH_CRYPTO_WALLET_DATA, payload: data });
    } 
    catch (error) {
        console.log(error);
    }
}
}