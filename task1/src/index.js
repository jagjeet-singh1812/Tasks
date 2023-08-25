import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Create a Todo app having two pages as follows
// - Incomplete page(route name : `/incomplete`) --> done
// - user can mark todo item as completed  --> done
// - Completed page(route name : `/completed`) --> done
// - user can mark todo item as incomplete  --> done

// Make a common header with a button to add a new item to todo list,
// which adds new items on incomplete pages. Users can also add items
// from the `/completed` page, where new items get added on
// `/incompleted` page.

reportWebVitals();
