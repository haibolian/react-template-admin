const svgFiles = import.meta.glob("../assets/svgs/*.svg", { eager: true }); // 根据你的路径修改
const Error = svgFiles["../assets/svgs/error.svg"]?.ReactComponent;

type SvgProps = {
  name: string;
  width?: string;
  height?: string;
  className?: string;
};
const SvgIcon = ({ name, width = "20", height = "20", className }: SvgProps) => {
  const Icon = svgFiles[`../assets/svgs/${name}.svg`]?.ReactComponent;

  return Icon ? (
    <Icon className={className} width={width} height={height} />
  ) : (
    <Error width={width} height={height} />
  );
};

export default SvgIcon;
