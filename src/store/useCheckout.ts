import { create } from "zustand";
import { useCart } from "./useCart";
import { useUser } from "./useUser";
import { Payload, UseCheckout } from "./useCheckout.types";

export const useCheckout = create<UseCheckout>((set) => ({
  name: "useCheckout",
  updateProgress: false,
  updateCartSuccess: true,
  payload: {} as Payload,
  showModal: false,
  updateCart: async (handleSetStep) => {
    set({
      updateProgress: true,
    });
    const { cartItems } = useCart.getState();
    const { userInfo } = useUser.getState();
    const cartProducts = Object.entries(cartItems).map(([id, { count }]) => {
      return {
        productId: id,
        quantity: count,
      };
    });
    try {
      const payload: Payload = {
        userId: userInfo.id,
        date: new Date().toLocaleDateString(),
        products: cartProducts,
      };
      const res = await fetch("https://fakestoreapi.com/carts/7", {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      await res.json();
      set({
        payload,
        updateProgress: false,
        updateCartSuccess: true,
        showModal: true,
      });
      setTimeout(() => {
        set({
          showModal: false,
        });
        if (handleSetStep) {
          handleSetStep();
        }
      }, 3000);
    } catch (error) {
      console.log(error);
      set({
        updateProgress: false,
        updateCartSuccess: false,
      });
    }
  },
}));
