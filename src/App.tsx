import React from "react";
import { RouterProvider } from "react-router";

import { toasterConfig } from "@config/toasterConfig";
import { Toaster } from "sonner";

import { router } from "./routes";

import "./styles/toast.css";

function App(): React.JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster {...toasterConfig} />
    </>
  );
}

export default App;
