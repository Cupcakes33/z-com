import { IconProps, ICON_NAMESPACE } from "./namespace.icon";

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = ICON_NAMESPACE[name];
  return <IconComponent {...props} />;
};

export default Icon;
