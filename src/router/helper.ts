import { PermissionMenus } from "#/user";
import React, { lazy } from "react";
import {RouteObject } from "react-router-dom";

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