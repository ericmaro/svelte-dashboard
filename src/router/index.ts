import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Default from "@/layouts/default/Default.vue";
import UsersLayout from "@/layouts/UsersLayout.vue";

import Login from "@/views/auth/login/Main.vue";
import Register from "@/views/auth/register/Main.vue";
import ErrorPage from "@/views/error-page/Main.vue";

import Stations from "@/views/pages/stations/Stations.vue";
import Audios from "@/views/pages/audios/Audios.vue";
import Matches from "@/views/pages/matches/Matches.vue";
import Config from "@/views/pages/Config.vue";
import Dashboard from "@/views/pages/Dashboard.vue";
import Users from "@/views/pages/users/Users.vue";
import Profile from "@/views/pages/users/Profile.vue";
import Roles from "@/views/pages/roles/Roles.vue";
// import Permissions from "@/views/pages/permissions/Permissions.vue";
import RolesPermissions from "@/views/pages/roles-permissions/Permissions.vue";
import Customers from "@/views/pages/customers/Customers.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "stations",
        name: "stations",
        component: Stations,
      },
      {
        path: "audios",
        name: "audios",
        component: Audios,
      },
      {
        path: "audios/match/:audioId",
        name: "match",
        component: Matches,
      },
      {
        path: "config",
        name: "config",
        component: Config,
      },
      {
        path: "users",
        component: UsersLayout,
        children: [
          {
            path: "",
            name: "users",
            component: Users,
          },
          {
            path: ":email",
            name: "profile",
            component: Profile,
          },
        ],
      },
      {
        path: "customers",
        component: Customers,
        children: [
          {
            path: "",
            name: "customers",
            component: Customers,
          },
        ],
      },
      {
        path: "roles",
        name: "roles",
        component: Roles,
      },
      {
        path: "permissions-matrix",
        name: "permissions-matrix",
        component: RolesPermissions,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
