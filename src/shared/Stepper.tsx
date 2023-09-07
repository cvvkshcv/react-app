import { Children, forwardRef, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Stepper.css";

type StepperProps = {
  initalStep?: number;
  tabTitles?: string[];
  children?: React.ReactNode;
};

export type StepperHandler = {
  moveNext: () => void;
  movePrev: () => void;
};

export const Stepper = forwardRef<StepperHandler, StepperProps>(
  ({ initalStep = 1, tabTitles, children }: StepperProps, ref) => {
    const stepsChildren = Children.toArray(children);
    const totalSteps = stepsChildren.length;
    const [currentStep, setCurrentStep] = useState(initalStep - 1);
    const currentStepComp = stepsChildren[currentStep];

    // Hooks
    useImperativeHandle(ref, () => ({
      moveNext: () => {
        setCurrentStep((step) => {
          if (step >= totalSteps - 1) return totalSteps - 1;
          return step + 1;
        });
      },
      movePrev: () => {
        setCurrentStep((step) => {
          if (step <= 0) return 0;
          return step - 1;
        });
      },
    }));

    const changeStep = (step = 1) => {
      setCurrentStep(step);
    };

    return (
      <motion.div layout className="stepper-wrapper">
        <div className="stepper-header">
          {new Array(totalSteps).fill(0).map((_, i) => {
            return (
              <>
                <div
                  className={`tab ${currentStep === i ? "active" : ""}`}
                  onClick={() => changeStep(i)}
                >
                  Step {i + 1} {tabTitles && `(${tabTitles[i]})`}
                </div>
              </>
            );
          })}
        </div>
        <div className="stepper-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep ? currentStep : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {currentStepComp}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }
);

export const Step = ({ children }: { children: React.ReactNode }) => {
  return <div className="step">{children}</div>;
};
