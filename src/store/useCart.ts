import { create } from "zustand";
import { UseCart } from "./useCart.types";

export const useCart = create<UseCart>((set, get) => ({
  name: "useCart",
  cartItems: {},
  products: [],
  loading: true,
  error: false,

  async fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=16");
      const data = await res.json();
      set({
        loading: false,
        error: false,
        products: data,
      });
    } catch (e) {
      set({
        loading: false,
        error: true,
        products: [],
      });
    }
  },

  removeFromCart(id: number) {
    const { cartItems } = get();
    const item = cartItems[id];
    if (item.count <= 1) {
      // Delete item
      const newCart = { ...cartItems };
      delete newCart[id];
      set({ cartItems: newCart });
    } else {
      // Existing item added
      set({
        cartItems: {
          ...cartItems,
          [id]: { count: item.count - 1 },
        },
      });
    }
  },

  deleteFromCart(id: number) {
    const { cartItems } = get();
    const newCart = { ...cartItems };
    delete newCart[id];
    set({ cartItems: newCart });
  },

  addToCart(id: number) {
    const { cartItems } = get();
    const item = cartItems[id];
    if (!item) {
      // If item is added for first time
      set({
        cartItems: {
          ...cartItems,
          [id]: { count: 1 },
        },
      });
    } else {
      set({
        cartItems: {
          ...cartItems,
          [id]: { count: item.count + 1 },
        },
      });
    }
  },
}));
