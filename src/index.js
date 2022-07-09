import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { InfoProvider } from "./context/info-context";
import { TimerProvider } from "./context/timer-context";
import { TodosProvider } from "./context/todos-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodosProvider>
    <TimerProvider>
      <InfoProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </InfoProvider>
    </TimerProvider>
  </TodosProvider>
);
