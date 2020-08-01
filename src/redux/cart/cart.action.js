import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
  console.log("i got here");
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};
