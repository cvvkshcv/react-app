import Spinner from "../shared/Spinner";
import { useCart } from "../store/useCart";
import { useCheckout } from "../store/useCheckout";
import CartCount from "./CartCount";

const CheckOut = () => {
  const { cartItemsObj, products, deleteFromCart } = useCart((store) => ({
    cartItemsObj: store.cartItems,
    products: store.products,
    deleteFromCart: store.deleteFromCart,
  }));

  const { updateCart, updateCartSuccess, updateProgress, payload } =
    useCheckout((store) => ({
      updateCart: store.updateCart,
      updateProgress: store.updateProgress,
      updateCartSuccess: store.updateCartSuccess,
      payload: store.payload,
    }));

  const cartItems = Object.entries(cartItemsObj)
    .map(([prodId, { count }]) => {
      const prod = products.find((prod) => prod?.id === Number(prodId));
      if (prod) {
        const discountPercent = 10;
        const discountAmount = prod.price * (discountPercent / 100);
        const finalPrice = prod.price - discountAmount;
        const totalCost = count * finalPrice;
        return {
          ...prod,
          count,
          totalCost,
          discountPercent,
          finalPrice,
          discountAmount,
        };
      }
    })
    .filter(Boolean);

  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + (curr?.totalCost || 0);
  }, 0);

  return (
    <div className="mx-24 mt-10">
      <table className="border-collapse table-auto w-full text-sm border shadow">
        <thead className="bg-slate-800">
          <tr>
            <th className="tableHead">Product name</th>
            <th className="tableHead text-center w-48">Count</th>
            <th className="tableHead">Remove</th>
            <th className="tableHead">Actual price</th>
            <th className="tableHead">Discount</th>
            <th className="tableHead">After discount</th>
            <th className="tableHead w-32">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {cartItems.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-3 text-lg font-bold">
                Cart is empty
              </td>
            </tr>
          )}
          {cartItems.map((product) => {
            if (!product) return null;
            return (
              <tr>
                <td className="tableRow text-left">{product.title}</td>
                <td className="tableRow">
                  <CartCount item={product} />
                </td>
                <td className="tableRow">
                  <button
                    className="px-3 py-1 bg-red-400 text-white rounded"
                    onClick={() => deleteFromCart(product.id)}
                  >
                    Delete
                  </button>
                </td>
                <td className="tableRow font-bold text-lg">
                  ${product.price.toFixed(2)}
                </td>
                <td className="tableRow font-bold text-lg">
                  {product?.discountPercent}% ($
                  {product.discountAmount})
                </td>
                <td className="tableRow font-bold text-lg">
                  ${product.finalPrice.toFixed(2)}
                </td>
                <td className="tableRow font-bold text-lg">
                  ${product.totalCost.toFixed(2)}
                </td>
              </tr>
            );
          })}
          {cartItems.length > 0 && (
            <tr>
              <td colSpan={7} className="text-right p-3 text-lg font-bold">
                Total: ${cartTotal.toFixed(2)}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {cartItems.length > 0 && (
        <button
          className="bg-green-600 px-3 py-2 text-white rounded mt-4 flex justify-center items-center"
          onClick={updateCart}
        >
          {updateProgress && <Spinner />}
          Checkout
        </button>
      )}

      {updateCartSuccess && !updateProgress && (
        <pre>{JSON.stringify(payload)}</pre>
      )}
    </div>
  );
};

export default CheckOut;
