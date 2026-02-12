import { createBrowserRouter, RouteObject } from "react-router";

import Login from "@pages/auth/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
];

export const router = createBrowserRouter(routes);
