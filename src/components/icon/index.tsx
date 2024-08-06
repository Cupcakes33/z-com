import { IconProps, ICON_NAMESPACE } from "./namespace.icon";

type IconComponentProps = IconProps & {
  name: keyof typeof ICON_NAMESPACE;
};
const Icon: React.FC<IconComponentProps> = ({ name, isActive, ...props }) => {
  const IconComponent = ICON_NAMESPACE[name];
  return <IconComponent {...props} />;
};

export default Icon;
