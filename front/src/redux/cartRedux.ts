import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "../types";

// export interface CartProduct {
//   id: number;
//   title: string;
//   author: string;
//   cover_url: string;
//   pages: number;
//   price: number;
//   currency: string;
//   amount: number;
// }
interface CartProduct extends BookType {
  amount: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartProduct[],
  reducers: {
    addProduct: (state, action: PayloadAction<BookType>) => {
      console.log(action.payload);
      console.log(state);
      const itemIndex = state?.findIndex(
        (product) => product.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex !== -1) {
        state[itemIndex].amount += 1;
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      const itemIndex = state?.findIndex(
        (product) => product.id === action.payload
      );
      if (state[itemIndex].amount > 1) {
        state[itemIndex].amount -= 1;
      } else {
        return state.filter((product) => product.id !== action.payload);
      }
    },
  },
});
///REFACTORING YAP VE SWITCH CASE DURUMUNA AYIR///
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
