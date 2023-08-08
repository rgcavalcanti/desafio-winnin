import { Navigate, createBrowserRouter } from "react-router-dom";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/hot" replace />,
  },
  {
    path: "/hot",
    element: <App context="hot" />,
  },
  {
    path: "/news",
    element: <App context="news" />,
  },
  {
    path: "/rising",
    element: <App context="rising" />,
  },
]);
