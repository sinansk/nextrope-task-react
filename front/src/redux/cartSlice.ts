import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "../types";
import { RootState } from "./store";

export interface CartProduct extends BookType {
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [] as CartProduct[],
  },
  reducers: {
    addProduct: (state, action: PayloadAction<BookType>) => {
      const itemIndex = state.cartProducts?.findIndex(
        (product) => product.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex !== -1) {
        state.cartProducts[itemIndex].quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartProducts?.findIndex(
        (product) => product.id === action.payload
      );

      if (state.cartProducts[itemIndex].quantity > 1) {
        state.cartProducts[itemIndex].quantity -= 1;
      } else {
        const updatedCart = state.cartProducts.filter(
          (product) => product.id !== action.payload
        );
        state.cartProducts = updatedCart;
      }
    },
    emptyCart: (state) => {
      state.cartProducts = [] as CartProduct[];
    },
  },
});
export const getTotalPrice = (state: RootState) =>
  state.cart.cartProducts.reduce(
    (acc, next) => (acc += next.quantity * next.price),
    0
  );
export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
