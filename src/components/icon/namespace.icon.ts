import dynamic from "next/dynamic";
import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  isActive?: boolean;
};

export const ICON_NAMESPACE: { [key: string]: React.ComponentType<IconProps> } =
  {
    search: dynamic(() => import("./icon.search")),
    me: dynamic(() => import("./icon.me")),
    home: dynamic(() => import("./icon.home")),
    explore: dynamic(() => import("./icon.explore")),
    message: dynamic(() => import("./icon.message")),
  };
