export type Payload = {
  userId: number;
  date: string;
  products: { productId: string; quantity: number }[];
};

export type UseCheckout = {
  updateCart: (handleSetStep: () => void) => void;
  showModal: boolean;
  updateProgress: boolean;
  updateCartSuccess: boolean;
  payload: Payload;
};
