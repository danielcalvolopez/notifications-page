import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NotificationsContextProvider from "./context/NotificationsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotificationsContextProvider>
    <App />
  </NotificationsContextProvider>
);
