import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={AppRouter} />
    </React.StrictMode>
  );
}

export default App;
