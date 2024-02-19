import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/feature/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
    <Toaster></Toaster>
  </React.StrictMode>
);
