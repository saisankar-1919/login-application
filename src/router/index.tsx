import { useRoutes } from "react-router-dom";
import Login from "../pages/login";

export default function Router() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
  ]);
}
