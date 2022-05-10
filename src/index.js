import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import CartDetailsContext from "./contexts/CartDetailsContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <CartDetailsContext>
          <App />
        </CartDetailsContext>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
