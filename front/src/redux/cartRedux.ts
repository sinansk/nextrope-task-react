import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "../types";

interface CartProduct extends BookType {
  amount: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [] as CartProduct[],
  },
  reducers: {
    addProduct: (state, action: PayloadAction<BookType>) => {
      console.log(action.payload);
      console.log(state.cartProducts);
      const itemIndex = state.cartProducts?.findIndex(
        (product) => product.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex !== -1) {
        state.cartProducts[itemIndex].amount += 1;
      } else {
        state.cartProducts.push({ ...action.payload, amount: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      const itemIndex = state.cartProducts?.findIndex(
        (product) => product.id === action.payload
      );
      console.log(itemIndex);
      if (state.cartProducts[itemIndex].amount > 1) {
        state.cartProducts[itemIndex].amount -= 1;
      } else {
        const updatedCart = state.cartProducts.filter(
          (product) => product.id !== action.payload
        );
        state.cartProducts = updatedCart;
      }
    },
    emptyCart: (state) => {
      state.cartProducts = [] as CartProduct[];
      console.log("burdayım");
    },
  },
});

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
