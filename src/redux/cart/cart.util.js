export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const removeItemFromCart = (cartItems, cartItemToReduce) => {
  return cartItems
    .map((item) => {
      if (item.id === cartItemToReduce.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity !== 0);
};
