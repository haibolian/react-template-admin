import React, { lazy, Suspense } from 'react';

// 使用 import.meta.glob 批量导入所有 SVG 图标
const svgFiles = import.meta.glob('../../assets/svgs/*.svg'); // 根据你的路径修改
const Menu: React.FC = () => {
  return (
    <div>
      <ul>
        {Object.keys(svgFiles).map((path) => {
          // 使用动态导入并获取 React 组件
          const SvgIcon = lazy(() => {
            return svgFiles[path]().then((module) => {
              // 获取 SVG 文件的 React 组件
              return { default: module.ReactComponent }; // 使用 `ReactComponent`
            });
          });

          return (
            <li key={path}>
              <Suspense fallback={<div>Loading...</div>}>
                <SvgIcon width={20} height={20} /> {/* 渲染 SVG 组件 */}
              </Suspense>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
