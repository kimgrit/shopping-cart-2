// src/store/cartStore.js
import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            if (state.cart.find((item) => item.id === product.id)) {
                alert('이미 장바구니에 추가된 상품입니다.');
                return state;
            }
            alert('장바구니에 추가되었습니다.');
            return { cart: [...state.cart, product] };
        }),
    removeFromCart: (productId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        })),
}));
