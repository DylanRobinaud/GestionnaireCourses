import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/courses`)
        .then((res) => res.data),
  },
  {
    path: "/produit/:id",
    element: <Product />,
    loader: ({ params }) =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/courses/${params.id}`)
        .then((res) => res.data),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
