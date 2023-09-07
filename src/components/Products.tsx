import { useState } from "react";
import Spinner from "../shared/Spinner";
import { motion } from "framer-motion";
import { useCart } from "../store/useCart";
import { ProductType } from "../store/useCart.types";
import Product from "./Product";

const Products = () => {
  const [filter, setFilter] = useState<string | boolean>(true);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setFilter(true);
    } else {
      setFilter(e.target.value);
    }
  };

  const _filter = (item: ProductType) => {
    if (filter === true) return filter;
    return item.category === filter;
  };

  const { loading, error, products } = useCart((store) => ({
    loading: store.loading,
    error: store.error,
    products: store.products,
  }));

  const allFilters = [...new Set(products.map((product) => product.category))];

  if (loading) return <Spinner />;
  if (error) return "Error...";
  return (
    <>
      {/* Filter seciton start  */}
      <div className="mx-16 my-5 flex justify-end mr-28">
        <label htmlFor="filter">Filter :</label>
        <select id="filter" className="border ml-2" onChange={handleFilter}>
          <option value="">All Items</option>
          {allFilters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>
      {/* Filter seciton end */}

      <div className="flex gap-4 flex-wrap justify-center">
        {products.filter(_filter).map((product: ProductType, i: number) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: i * 0.1,
            }}
            className="rounded bg-white border w-1/5 p-3 shadow hover:shadow-lg transition-all"
          >
            <Product item={product} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Products;
