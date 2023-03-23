import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { PaymentProvider } from "./context/PaymentsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // allow to access data from the payment context anywhere in the application
  <PaymentProvider> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PaymentProvider>
);
