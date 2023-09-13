import { useEffect, useRef, useState } from "react";
import { useCart } from "./store/useCart";
import Products from "./components/Products";
import { Stepper, StepperHandler } from "./shared/Stepper";
import CheckOut from "./components/CheckOut";
import Billing from "./components/Billing";
import { useUser } from "./store/useUser";
import { useCheckout } from "./store/useCheckout";
import SuccessModal from "./components/SuccessModal";

function App() {
  const { fetchProducts } = useCart((store) => ({
    fetchProducts: store.fetchProducts,
  }));

  const { fetchUserDetail, userInfo } = useUser((store) => ({
    fetchUserDetail: store.fetchUserDetail,
    userInfo: store.userInfo,
    loadingUserInfo: store.loading,
  }));

  const showModal = useCheckout((store) => store.showModal);
  const stepperHandler = useRef<StepperHandler>(null);
  useEffect(() => {
    fetchProducts();
    fetchUserDetail(1);
  }, [fetchProducts, fetchUserDetail]);

  const handleContinue = () => {
    stepperHandler.current?.moveNext();
  };
  const handlePrev = () => {
    stepperHandler.current?.movePrev();
  };
  const handleSetStep = (id = 0) => {
    stepperHandler.current?.moveToStep(id);
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

  const FinishBtn = () => (
    <div className="mx-24 mt-5">
      <button
        className="bg-white p-3 rounded shadow-lg border"
        onClick={handleContinue}
      >
        Finish
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

  const steps = [
    {
      tabTitle: "Products",
      component: (
        <>
          <div className="flex justify-end">
            <ContinueBtn />
          </div>
          <Products />
        </>
      ),
    },
    {
      tabTitle: "Billing",
      component: (
        <>
          <div className="flex justify-between">
            <PrevBtn />
            <ContinueBtn />
          </div>
          <Billing handleContinue={handleContinue} />
        </>
      ),
      shouldSkip: () => Object.keys(userInfo?.address || {}).length !== 0,
    },
    {
      tabTitle: "Checkout",
      component: (
        <>
          <div className="flex justify-between">
            <PrevBtn />
            <FinishBtn />
          </div>
          <CheckOut handleSetStep={handleSetStep} />
        </>
      ),
      shouldSkip: () => false,
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Stepper
          ref={stepperHandler}
          steps={steps}
          tabTitles={["Products", "Billing", "Checkout"]}
          onComplete={() => {
            console.log("Flow completed");
          }}
        >
          {/* <Step>
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
          </Step> */}
        </Stepper>
      </div>
      {showModal && <SuccessModal />}
    </>
  );
}

export default App;
