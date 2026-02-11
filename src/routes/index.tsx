import { createBrowserRouter, RouteObject } from "react-router";

import App from "../App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
];

export const router = createBrowserRouter(routes);
