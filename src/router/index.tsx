import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

export default function Router() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
}
