import { useCart } from "../store/useCart";
import { motion, AnimatePresence } from "framer-motion";
import { ProductType } from "../store/useCart.types";

const btnTap = { scale: 0.9 };

const cartCountAnim = {
  exit: { opacity: 0 },
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const CartCount = ({ item }: { item: ProductType }) => {
  const { addToCart, cartItems, removeFromCart } = useCart((store) => ({
    addToCart: store.addToCart,
    removeFromCart: store.removeFromCart,
    cartItems: store.cartItems,
  }));

  return (
    <AnimatePresence initial={false}>
      {cartItems?.[item.id]?.count ? (
        <div className="flex justify-between">
          <motion.button
            whileTap={btnTap}
            className="addRemoveItem"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </motion.button>
          <motion.span {...cartCountAnim} key={cartItems?.[item.id]?.count}>
            {cartItems?.[item.id]?.count}
          </motion.span>
          <motion.button
            whileTap={btnTap}
            className="addRemoveItem"
            onClick={() => addToCart(item.id)}
          >
            +
          </motion.button>
        </div>
      ) : (
        <motion.button
          {...cartCountAnim}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={btnTap}
          className="addToCartBtn"
          onClick={() => addToCart(item.id)}
        >
          Add to cart
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default CartCount;
