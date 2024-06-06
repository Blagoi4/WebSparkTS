import { router } from "./routing/routing";
import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
