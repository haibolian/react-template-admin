import { PermissionMenus } from "#/user";
import React, { lazy, Suspense } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import LayoutPage from "@/layout";


const ENTRY_PATH = "/src/pages";
const PAGES = import.meta.glob("/src/pages/**/*.tsx");
const loadComponentFromPath = (path: string) => PAGES[`${ENTRY_PATH}${path}`];

const loadComponent = (path: string) => {
  return lazy(() => import(`../pages/${path}`));
};
export const generateRoutes = (menus: PermissionMenus[]): RouteObject[] => {
  return menus.map((menu) => {
    let route: RouteObject;
    if(menu.isHome) {
      route = {
        index: true,
        element: React.createElement(loadComponent(menu.component))
      }
    }else {
      route = {
        path: menu.path,
      };
      if(menu.component) route.element = React.createElement(loadComponent(menu.component))
    }
    if (menu.children && menu.children.length > 0) {
      route.children = generateRoutes(menu.children);
    }
    return route;
  });
};