import { PermissionMenus } from "#/user";
import SvgIcon from "@/components/svg-icon";
import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>['items'][number];

export const buildMenu = (menus: PermissionMenus[], context = '/'): MenuItem [] => {
  if(!menus) return undefined!;
  return menus.filter(i => i.show).map((menu) => {
    return {
      label: menu.title,
      key: context + menu.path,
      children: buildMenu(menu.children!, context + menu.path + '/'),
      icon: menu.icon ? <SvgIcon className='mr-0.1' name={menu.icon}  /> : null
    }
  });
}