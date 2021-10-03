import IRoute from "../interfaces/route";
import Home from "../pages";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "Home Page",
    protected: false,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    name: "Login Page",
    protected: false,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    name: "Dashboard Page",
    protected: true,
  },
  {
    path: "*",
    exact: true,
    component: NotFound,
    name: "NotFound Page",
    protected: false,
  },
];

export default routes;
