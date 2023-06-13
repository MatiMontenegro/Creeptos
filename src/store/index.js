import { createStore, combineReducers } from 'redux';
import localWalletReducer from './Reducers/localWalletReducer';
import cryptoWalletReducer from './Reducers/cryptoWalletReducer';

const rootReducer = combineReducers({
  localWallet: localWalletReducer,
  cryptoWallet: cryptoWalletReducer,
});

const store = createStore(rootReducer);

export default store;
