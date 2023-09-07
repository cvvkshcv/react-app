export type Payload = {
  userId: number;
  date: string;
  products: { productId: string; quantity: number }[];
};

export type UseCheckout = {
  updateCart: () => void;
  updateProgress: boolean;
  updateCartSuccess: boolean;
  payload: Payload;
};
