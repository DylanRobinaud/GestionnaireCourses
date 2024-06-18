import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import connexion from "./services/connexion";

import App from "./App";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      try {
        const products = await connexion.get("/api/courses");
        return products.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  {
    path: "/produit/:id",
    element: <Product />,
    loader: async ({ params }) => {
      try {
        const productsId = await connexion.get(`/api/courses${params.id}`);
        return productsId.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
