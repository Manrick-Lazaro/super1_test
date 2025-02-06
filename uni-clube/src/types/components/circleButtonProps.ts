import { JSX } from "react";
import { IconType } from "react-icons";

type CircleButtonProps = {
  bgColor?: string;
  size?: number;
  colorIcon?: string;
  sizeIcon: number;
  icon: IconType;
  text?: JSX.Element;
  title?: string;
  onClick: () => void;
};

export default CircleButtonProps;
