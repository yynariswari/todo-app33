import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { HashRouter } from "react-router-dom"; // ⬅️ diganti

import { TodoProvider } from "./context/TodoContext.jsx";
import { VoteProvider } from "./context/VoteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      {" "}
      {/* ⬅️ diganti */}
      <TodoProvider>
        <VoteProvider>
          <App />
        </VoteProvider>
      </TodoProvider>
    </HashRouter>
  </React.StrictMode>
);
