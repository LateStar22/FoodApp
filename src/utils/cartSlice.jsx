import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item.card.info.name === action.payload.card.info.name);
        
            if (existingItemIndex !== -1) {
                // If the item already exists in the cart, update its quantity
                state.items[existingItemIndex].quantity += 1;
            } else {
                // If the item is not in the cart, push it to the items array
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item.card.info.name === action.payload.card.info.name);
            
            // Check if the item exists in the cart
            if (existingItemIndex !== -1) {
                // If the item exists, decrement its quantity
                if (state.items[existingItemIndex].quantity > 1) {
                    state.items[existingItemIndex].quantity -= 1;
                } else {
                    // If the item's quantity is 1, remove it from the cart
                    state.items.splice(existingItemIndex, 1);
                }
            }
        },
        
        clearCart : (state) => {
            state.items.length = 0;
        }   
    } 
})


export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;