import {
  createRoute,
  createRouter,
  createRootRoute,
} from "@tanstack/react-router";
import { Home, Login, Register } from "../Pages/_index";

const rootRoute = createRootRoute();

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const routeTree = rootRoute.addChildren([loginRoute, registerRoute, homeRoute]);

export const router = new createRouter({ routeTree });
