import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selecrCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCardHidden = createSelector(
    [selectCart],
    (card) => card.hidden
);
