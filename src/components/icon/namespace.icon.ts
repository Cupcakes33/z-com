import dynamic from "next/dynamic";

export const ICON_NAMESPACE = {
  search: dynamic(() => import("./icon.search")),
};

export type IconProps = React.SVGProps<SVGSVGElement> & {
  name: keyof typeof ICON_NAMESPACE;
};

