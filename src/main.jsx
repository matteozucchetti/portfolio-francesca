import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Navigate, RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.scss";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return <Navigate to="/" />;
  },
});

const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
