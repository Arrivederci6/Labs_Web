export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export const addToCart = item => ({
    type: ADD_TO_CART,
    payload: item,
});

export const changeQuantity = (item, quantity) => ({
    type: CHANGE_QUANTITY,
    payload: { item, quantity },
});