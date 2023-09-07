import { useEffect, useRef } from "react";
import { useCart } from "./store/useCart";
import Products from "./components/Products";
import { Step, Stepper, StepperHandler } from "./shared/Stepper";
import CheckOut from "./components/CheckOut";
import Billing from "./components/Billing";

function App() {
  const { fetchProducts } = useCart((store) => ({
    fetchProducts: store.fetchProducts,
  }));

  const stepperHandler = useRef<StepperHandler>(null);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleContinue = () => {
    stepperHandler.current?.moveNext();
  };
  const handlePrev = () => {
    stepperHandler.current?.movePrev();
  };

  const ContinueBtn = () => (
    <div className="mx-24 mt-5">
      <button
        className="bg-white p-3 rounded shadow-lg border"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );

  const PrevBtn = () => (
    <div className="mx-24 mt-5">
      <button
        className="bg-white p-3 rounded shadow-lg border"
        onClick={handlePrev}
      >
        Prev
      </button>
    </div>
  );

  return (
    <>
      <div className="min-h-screen">
        <Stepper
          ref={stepperHandler}
          tabTitles={["Products", "Billing", "Checkout"]}
        >
          <Step>
            <div className="flex justify-end">
              <ContinueBtn />
            </div>
            <Products />
          </Step>
          <Step>
            <div className="flex justify-between">
              <PrevBtn />
              <ContinueBtn />
            </div>
            <Billing />
          </Step>
          <Step>
            <PrevBtn />
            <CheckOut />
          </Step>
        </Stepper>
      </div>
    </>
  );
}

export default App;
