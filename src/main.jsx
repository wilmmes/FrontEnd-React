import { StrictMode } from "react";

import store  from "./store/store.js";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter basename="/FrontEnd-React/">
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

