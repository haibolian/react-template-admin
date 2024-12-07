import { PermissionMenus } from "#/user";
import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

const loadComponent = (path: string) => {
  return lazy(() => import(`../pages/${path}`));
};

export const generateRoutes = (menus: PermissionMenus[]): RouteObject[] => {
  return menus.map((menu) => {
    const route: RouteObject = {
      path: menu.path,
      element: React.createElement(loadComponent(menu.component)),
    };
    if (menu.children && menu.children.length > 0) {
      route.children = generateRoutes(menu.children);
    }
    return route;
  });
};