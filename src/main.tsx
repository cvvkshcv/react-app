import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.js";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import { ErrorPage } from "./components/ErrorPage";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Landing from "./pages/landing/Landing.js";
import Settings from "./pages/settings/Settings.js";
import Profile from "./pages/profile/Profile.js";
import MainLayout from "./components/MainLayout.js";
import DocInsight from "./pages/docinsight/DocInsight.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/settings",
        element: <Settings />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/docinsights",
        element: <DocInsight />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace={true} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
