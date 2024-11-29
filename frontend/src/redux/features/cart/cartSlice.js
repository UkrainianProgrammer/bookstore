import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

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
        Swal.fire({
        title: "Already added to cart",
        text: "",
        icon: "warning",
        // showCancelButton: true,
        confirmButtonColor: "#3085d6",
        // cancelButtonColor: "#d33",
        confirmButtonText: "Ok!"
        })
      } else {
       state.cartItems.push(action.payload);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully added to cart",
            showConfirmButton: false,
            timer: 1500
        });
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer