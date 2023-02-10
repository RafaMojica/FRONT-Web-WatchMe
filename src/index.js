import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./style/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./states/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);