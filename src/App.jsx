import { useEffect } from "react";
import "./App.css";

function App() {
  const flatObj = (obj, pre, newObj) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] !== "object") {
        newObj[pre + key] = obj[key];
      } else {
        flatObj(obj[key], key + "_", newObj);
      }
    });
    return newObj;
  };

  useEffect(() => {
    const obj = {
      name: "Test",
      email: "test",
      address: {
        street: "street name",
        pincode: "12345",
        city: "Bangalore",
      },
    };

    const result = flatObj(obj, "", {});
    console.log(result);
  }, []);

  return (
    <>
      <div className="text-3xl font-serif">Check the console</div>
    </>
  );
}

export default App;
