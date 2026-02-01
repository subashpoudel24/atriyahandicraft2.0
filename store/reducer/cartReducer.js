import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
    products: []
}

export const cartReducer = createSlice({
    name: 'cartStore',
    initialState,
    reducers: {
        addIntoCart: (state, action) => {
            const payload = action.payload
            const existingProduct = state.products.findIndex(
                (product) => product && product.productId === payload.productId && 
                product.color === payload.color && product.size === payload.size
            )

            if (existingProduct < 0) {
                state.products.push(payload)
                state.count = state.products.filter(product => product).length
            }
        },
        increaseQuantity: (state, action) => {
            const { productId, color, size } = action.payload
            const existingProduct = state.products.findIndex(
                (product) => product.productId === productId && product.color === color && product.size === size
            )

            if (existingProduct >= 0) {
                state.products[existingProduct].qty += 1
            }
        },
        decreaseQuantity: (state, action) => {
            const { productId, color, size } = action.payload
            const existingProduct = state.products.findIndex(
                (product) => product.productId === productId && product.color === color && product.size === size
            )

            if (existingProduct >= 0) {
                if (state.products[existingProduct].qty > 1) {
                    state.products[existingProduct].qty -= 1
                }
            }
        },
        removeFromCart: (state, action) => {
            const { productId, color, size } = action.payload

            state.products = state.products.filter((product) => product && !(product.productId === productId && product.color === color && product.size === size))

            state.count = state.products.filter(product => product).length
        },
        clearCart: (state, action) => {
            state.products = []
            state.count = 0
        },
        recalculateCount: (state) => {
            state.products = state.products.filter(product => product)
            state.count = state.products.length
        }

    }
})

export const {
    addIntoCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    recalculateCount
} = cartReducer.actions
export default cartReducer.reducer
