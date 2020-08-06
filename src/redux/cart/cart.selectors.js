import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accunulatedQuantity, { quantity }) => accunulatedQuantity + quantity,
      0
    )
);

export const selectCartPriceTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accunulatedTotal, { quantity, price }) => accunulatedTotal + (quantity * price),0)
);
