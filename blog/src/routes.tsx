// routes.ts
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Ing from "./pages/Ing";

//Route type
import { RouteType } from "./types";

export const routes: RouteType[] = [
  {
    path: "blog/",
    component: Home,
  },
  {
    path: "blog/profile",
    component: Profile,
  },
  {
    path: "blog/project",
    component: Project,
  },
  {
    path: "blog/ing",
    component: Ing,
  },
];
