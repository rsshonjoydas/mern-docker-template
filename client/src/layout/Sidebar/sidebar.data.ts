import Setting from "../../pages/Setting";

export default [
  {
    id: 1,
    path: "",
    icon: "fas fa-home",
    label: "Dashboard",
  },
  {
    id: 2,
    path: "messenger",
    icon: "fas fa-comments",
    label: "Messenger",
  },
  {
    id: 3,
    path: "project",
    icon: "fas fa-folder",
    label: "Project",
  },
  {
    id: 4,
    path: "analytics",
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
    path: "settings",
    icon: "fas fa-cog",
    label: "Setting",
    component: Setting,
  },
  {
    id: 7,
    path: "logout",
    icon: "fas fa-sign-out-alt",
    label: "Log Out",
  },
];
