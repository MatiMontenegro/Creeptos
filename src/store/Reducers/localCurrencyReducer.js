const initialState = {
    currency: 'USD',
    amount: 0
};

const localCurrencyReducer = (state = initialState, action) => {
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

export default localCurrencyReducer;