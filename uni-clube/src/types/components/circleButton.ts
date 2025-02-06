import { IconType } from "react-icons";

type CircleButtonProps = {
  size?: number;
  colorIcon?: string;
  sizeIcon: number;
  icon?: IconType;
  title?: string;
  onClick: () => void;
};

export default CircleButtonProps;
