import { create } from "zustand";
import { AddressWithoutGeo, UseUser, UserInfo } from "./useUser.types";

export const useUser = create<UseUser>((set, get) => ({
  userInfo: {} as UserInfo,
  loading: true,
  error: false,
  isSubmitting: false,
  isSubmitSuccess: true,
  fetchUserDetail: async (id: number) => {
    try {
      const res = await fetch("https://fakestoreapi.com/users/" + id);
      const data = await res.json();
      set({
        userInfo: data,
        loading: false,
        error: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: true,
      });
    }
  },

  setUserInfo: (data: AddressWithoutGeo) => {
    const { userInfo, updateUserInfo } = get();
    const newUser = {
      ...userInfo,
      address: {
        ...userInfo.address,
        ...data,
      },
    };
    set({
      userInfo: newUser,
      isSubmitting: true,
    });
    updateUserInfo();
  },

  updateUserInfo: async () => {
    const { userInfo } = get();
    try {
      const res = await fetch("https://fakestoreapi.com/users/1", {
        method: "PUT",
        body: JSON.stringify(userInfo),
      });
      await res.json();
      set({
        isSubmitting: false,
        isSubmitSuccess: true,
      });
    } catch (error) {
      console.log(error);
      set({
        isSubmitting: false,
        isSubmitSuccess: false,
      });
    }
  },
}));
