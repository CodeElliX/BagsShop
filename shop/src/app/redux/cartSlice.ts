
import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from '../utils/calcTotalPrice';
import { calcTotalCount } from '../utils/calcTotalCount';

export type CartItem = {
  id: number,
  art: number
  count: number
  price: number
}

export interface CartState {
  items: CartItem[],
  totalPrice: number,
  totalCount: number
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalCount = action.payload.totalCount;
    },
    addItem(state, action) {
      const { id, art } = action.payload;
      const existingItem = state.items.find((obj) => obj.id === id && obj.art === art);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    addCount(state, action) {
      const item = state.items.find((obj) => obj.id === action.payload);
      if (item) {
        item.count += 1;
      }
      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    minusCount(state, action) {
      const item = state.items.find((obj) => obj.id === action.payload);
      if (item) {
        item.count -= 1;
      }
      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (obj) => !(obj.id === action.payload.id && obj.art === action.payload.art)
      );
      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    removeAllItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
});


export const { addItem, addCount, minusCount, removeItem, removeAllItems, setCart } = cartSlice.actions;
export default cartSlice.reducer;
