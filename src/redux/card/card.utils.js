export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemsToAdd.id ?
            {...cartItem, quantity: cartItemsToAdd.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1}]
};
