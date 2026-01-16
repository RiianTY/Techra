/* eslint-disable prettier/prettier */
import "@/styles/globals.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

// Lazy load Toaster since it's not needed for initial render
const Toaster = lazy(() => 
  import("@/components/sonner").then(module => ({ default: module.Toaster }))
);

// Only use StrictMode in development to reduce production bundle overhead
const RootComponent = () => {
  const app = (
    <BrowserRouter>
      <Provider>
        <App />
        <Suspense fallback={null}>
          <Toaster />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );

  if (import.meta.env.DEV) {
    return <React.StrictMode>{app}</React.StrictMode>;
  }

  return app;
};

ReactDOM.createRoot(document.getElementById("root")!).render(<RootComponent />);
