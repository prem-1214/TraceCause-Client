import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "./configs/queryClientConfig.ts";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import App from "./App.tsx";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
