/* eslint-disable prettier/prettier */
import { Toaster } from "@/components/sonner";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { ClerkProvider } from "@clerk/clerk-react";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        elements: {
          modalBackdrop: "flex items-center justify-center ",
          modal: "flex items-center justify-center",
        },
      }}
    > */}
    <BrowserRouter>
      <Provider>
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
    {/* </ClerkProvider> */}
  </React.StrictMode>
);
