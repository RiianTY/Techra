/* eslint-disable prettier/prettier */
import "@/styles/globals.css";
import React, { Component, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

// Lazy load Toaster since it's not needed for initial render
const Toaster = lazy(() =>
  import("@/components/sonner").then((module) => ({ default: module.Toaster }))
);

// Catch runtime errors so we don't show a white screen (e.g. on Vercel)
class RootErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  state = { hasError: false, error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Root error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            fontFamily: "system-ui, sans-serif",
            background: "hsl(0 0% 98%)",
            color: "hsl(0 0% 9%)",
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <h1 style={{ fontSize: "1.25rem", marginBottom: 8 }}>
              Something went wrong
            </h1>
            <p style={{ marginBottom: 16 }}>
              Refresh the page. If it keeps happening, check the browser console
              for errors.
            </p>
            <pre
              style={{
                fontSize: 12,
                overflow: "auto",
                padding: 12,
                background: "hsl(0 0% 94%)",
                borderRadius: 8,
              }}
            >
              {this.state.error.message}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

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

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <RootErrorBoundary>
      <RootComponent />
    </RootErrorBoundary>
  );
}
