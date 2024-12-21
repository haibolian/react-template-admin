import { PermissionMenus } from "#/user";
import SvgIcon from "@/components/svg-icon";
import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>['items'][number];

const svgFiles = import.meta.glob('../assets/svgs/*.svg', { eager: true }); // 根据你的路径修改

export const buildMenu = (menus: PermissionMenus[], context = '/'): MenuItem [] => {
  if(!menus) return undefined!;
  return menus.filter(i => i.show).map((menu) => {
    const Icon = svgFiles[`../assets/svgs/${menu.icon}.svg`]?.ReactComponent
    return {
      label: menu.title,
      key: context + menu.path,
      children: buildMenu(menu.children!, context + menu.path + '/'),
      icon: menu.icon ? <SvgIcon name={menu.icon}  /> : null
    }
  });
}