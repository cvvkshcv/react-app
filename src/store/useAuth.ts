import { create } from "zustand";
import { UseAuthType } from "./types/UseAuthType.types";
import { googleAuth } from "../services/google.auth";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
// import { createUser } from "../services/client.service";

export const useAuth = create<UseAuthType>((set) => ({
  user: null,
  loadingUser: true,
  userToken: null,
  logout: () => {
    signOut(googleAuth.auth).then(
      () => {
        set({ user: null });
        setUserToken(null);
      },
      (e) => {
        // logEvent(analytics, e.message);
        console.error(e.message);
      }
    );
  },
  setUser: (userInfo: any) => set({ user: userInfo, loadingUser: false }),
  setUserToken: (userToken: any) => set({ userToken, loadingUser: false }),
  googleLogin: (onClose: () => void, navigate: NavigateFunction) => {
    signInWithPopup(googleAuth.auth, googleAuth.provider).then((data) => {
      // createUser();
      setUser(data?.user);
      onClose();
      navigate("/dashboard");
    });
  },
}));

// Auto login on change
const setUser = useAuth.getState().setUser;
const setUserToken = useAuth.getState().setUserToken;

const updateUserTokenToState = (user) => {
  if (user !== null) {
    user?.getIdToken().then((token) => {
      setUserToken(token);
    });
  }
};

onAuthStateChanged(googleAuth.auth, (user) => {
  if (user) {
    setUser(user);
    updateUserTokenToState(user);
  } else {
    setUser(null);
    setUserToken(null);
  }
});
