import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQty: 0,
    changed: false,
    // totalAmount: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQty = action.payload.totalQty;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((i) => i.id === newItem.id);
      state.totalQty++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.qty++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find(i => i.id === itemId);
      state.totalQty--;
      state.changed = true;
      if (existingItem.qty === 1) {
        state.items = state.items.filter(i => i.id !== itemId);
      } else {
        existingItem.qty--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;