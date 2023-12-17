import { ADD_TO_CART, CHANGE_QUANTITY } from './actions';

export const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItemIndex = state.findIndex(cartItem => cartItem.id === action.payload.id);
            if (existingItemIndex !== -1) {
                const updatedCart = [...state];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case CHANGE_QUANTITY:
            const itemIndex = state.findIndex(cartItem => cartItem.id === action.payload.item.id);
            if (itemIndex !== -1) {
                const updatedCart = [...state];
                updatedCart[itemIndex].quantity = action.payload.quantity;
                return updatedCart;
            }
            return state;
        default:
            return state;
    }
};