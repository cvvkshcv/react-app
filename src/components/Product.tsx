import { prodAnim } from "../constants/Product.constants";
import { ProductType } from "../store/useCart.types";
import { motion } from "framer-motion";
import { Rating } from "./Rating";
import CartCount from "./CartCount";

type ProductProps = {
  item: ProductType;
};

const Product = ({ item }: ProductProps) => {
  return (
    <motion.div {...prodAnim} className="w-100">
      <img src={item.image} className="h-40 object-contain mx-auto mb-3" />
      <p className="prodCategory">{item.category}</p>
      <p className="prodTitle" title={item.title}>
        {item.title}
      </p>
      <p className="textEllipse" title={item.description}>
        {item.description}
      </p>
      <Rating rating={item.rating.rate} />{" "}
      <span className="text-xs"> {item.rating.count} reviews</span>
      <p className="prodPrice">${item.price}</p>
      <footer className="mt-2 h-10">
        <CartCount item={item} />
      </footer>
    </motion.div>
  );
};

export default Product;
