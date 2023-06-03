import { createStoreHook, combineReducers } from "react-redux";

createStoreHook

const RootReducer = combineReducers({
localWallet : localWalletReducer,
cryptoWallet: cryptoWalletReducer
})