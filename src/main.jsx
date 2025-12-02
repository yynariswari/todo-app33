import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { TodoProvider } from "./context/TodoContext.jsx";
import { VoteProvider } from "./context/VoteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <VoteProvider>
          <App />
        </VoteProvider>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
