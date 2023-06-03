const initialState = {
    currency: 'BTC',
    amount: 0
};

const cryptoCurrencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENCY':
            return {
                ...state,
                currency: action.payload
            };
        case 'SET_AMOUNT':
            return {
                ...state,
                amount: action.payload
            };
        default:
            return state;
    }
};

export default cryptoCurrencyReducer;