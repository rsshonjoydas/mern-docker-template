import LogOut from "../../components/auth/LogOut";
import Setting from "../../pages/Setting";

export default [
  {
    id: 1,
    path: "/dashboard/",
    icon: "fas fa-home",
    label: "Dashboard",
  },
  {
    id: 2,
    path: "/dashboard/messenger",
    icon: "fas fa-comments",
    label: "Messenger",
  },
  {
    id: 3,
    path: "/dashboard/project",
    icon: "fas fa-folder",
    label: "Project",
  },
  {
    id: 4,
    path: "/dashboard/analytics",
    icon: "fas fa-chart-pie",
    label: "Analytics",
  },
  {
    id: 5,
    path: "team",
    icon: "fas fa-users",
    label: "Team",
  },
  {
    id: 6,
    path: "/dashboard/settings",
    icon: "fas fa-cog",
    label: "Setting",
    component: Setting,
  },
  {
    id: 7,
    path: "",
    icon: "fas fa-sign-out-alt",
    label: "Log Out",
    component: LogOut,
  },
];
