import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <div className="p-3">
        <Outlet />
      </div>
    </ChakraProvider>
  );
}

export default App;
