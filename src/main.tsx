import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.ts";
import { router } from "./routes.tsx";
import { ArticlesProvider } from "./contexts/articles.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ArticlesProvider>
      <RouterProvider router={router} />
    </ArticlesProvider>
  </React.StrictMode>
);
