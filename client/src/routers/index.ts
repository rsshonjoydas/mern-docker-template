import ChangePassword from "../components/auth/ChangePassword/ChangePassword";
import ForgetPassword from "../components/auth/ForgetPassword/ForgetPassword";
import NewPassword from "../components/auth/ForgetPassword/NewPassword";
import OTPForm from "../components/auth/OTPForm/OTPForm";
import IRoute from "../interfaces/route";
import Home from "../pages";
import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Setting from "../pages/Setting";
import SignUp from "../pages/SignUp";

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
    // protected: false,
  },
  {
    path: "/signup",
    exact: true,
    component: SignUp,
    name: "Login Page",
    // protected: false,
  },
  {
    path: "/signup/otp-verify",
    exact: true,
    component: OTPForm,
    name: "Login Page",
    // protected: false,
  },
  {
    path: "/forget-password",
    exact: true,
    component: ForgetPassword,
    name: "Login Page",
    // protected: false,
  },
  {
    path: "/new-password",
    exact: true,
    component: NewPassword,
    name: "Login Page",
    // protected: false,
  },
  {
    path: "/dashboard/settings/change-password",
    exact: true,
    component: ChangePassword,
    name: "Login Page",
    // protected: false,
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    name: "Dashboard Page",
    protected: true,
  },
  {
    path: "/dashboard/settings",
    exact: true,
    component: Setting,
    name: "Dashboard Page",
    protected: true,
  },
  {
    path: "*",
    exact: true,
    component: NotFound,
    name: "NotFound Page",
  },
];

export default routes;
