import { PermissionMenus } from "#/user";
import React, { lazy } from "react";
import {Navigate, RouteObject } from "react-router-dom";

const loadComponent = (path: string) => {
  /* @vite-ignore */
  return React.createElement(lazy(() => import(/* @vite-ignore */`../pages/${path}`)));
};
export const generateRoutes = (menus: PermissionMenus[]): RouteObject[] => {
  const redirectRoutes: RouteObject[] = []
  const routes: RouteObject[] = []
  menus.forEach((menu) => {

    if(menu.redirect) {
      redirectRoutes.push({
        path: menu.path,
        element: <Navigate to={menu.redirect!} replace/>,
        handle: { title: menu.title }
      })
      if(!menu.children?.length) return;
    }

    const route: RouteObject = { path: menu.path, handle: { title: menu.title } };
    if(menu.component) route.element = loadComponent(menu.component)
    if (menu.children && menu.children.length > 0) {
      route.children = generateRoutes(menu.children);
    }
    routes.push(route)
  });
  return [...redirectRoutes, ...routes, ]
};