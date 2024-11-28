import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (existingItem) {
        alert('Item already exists');
      } else {
       state.cartItems.push(action.payload);
        alert('Item added successfully');
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer