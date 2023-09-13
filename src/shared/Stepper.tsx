import { Children, forwardRef, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Stepper.css";

type StepConfig = {
  tabTitle: string;
  component: React.ReactNode;
  shouldSkip: () => boolean;
};
type StepperProps = {
  initalStep?: number;
  tabTitles?: string[];
  children?: React.ReactNode;
  steps: StepConfig[];
  onComplete: () => void;
};

export type StepperHandler = {
  moveNext: () => void;
  movePrev: () => void;
  moveToStep: (stepIndex?: number) => void;
};

export const Stepper = forwardRef<StepperHandler, StepperProps>(
  ({ initalStep = 1, steps, onComplete }: StepperProps, ref) => {
    // const stepsChildren = Children.toArray(children);
    const totalSteps = steps.length;
    const [currentStep, setCurrentStep] = useState(initalStep - 1);
    const currentStepComp = steps[currentStep].component;
    const currentTabTitle = steps[currentStep].tabTitle;
    // Hooks
    useImperativeHandle(ref, () => ({
      moveNext: () => {
        if (currentStep + 1 === steps.length) {
          onComplete();
          return;
        }
        const skipNextStep = steps[currentStep + 1]?.shouldSkip() || false;
        if (skipNextStep) {
          setCurrentStep((step) => {
            if (step + 2 >= totalSteps) return step;
            return step + 2;
          });
        } else {
          setCurrentStep((step) => {
            if (step >= totalSteps - 1) return totalSteps - 1;
            return step + 1;
          });
        }
      },
      movePrev: () => {
        const skipPrevStep = steps?.[currentStep - 1]?.shouldSkip?.() || false;

        if (skipPrevStep) {
          setCurrentStep((step) => {
            console.log({ step });
            if (step - 2 < 0) return step;
            return step - 2;
          });
        } else {
          setCurrentStep((step) => {
            if (step <= 0) return 0;
            return step - 1;
          });
        }
      },
      moveToStep: (step: number = 0) => {
        setCurrentStep(step);
      },
    }));

    // const changeStep = (step = 1) => {
    //   setCurrentStep(step);
    // };

    return (
      <motion.div layout className="stepper-wrapper">
        <div className="stepper-header">
          {/* {new Array(totalSteps).fill(0).map((_, i) => {
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
          })} */}
          <div className={`tab`}>{currentTabTitle}</div>
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
