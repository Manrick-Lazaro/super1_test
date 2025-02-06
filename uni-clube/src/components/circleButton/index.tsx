"use client";

import CircleButtonProps from "@/types/components/circleButtonProps";
import { JSX } from "react";

export function CircleButton({
  sizeIcon,
  icon: Icon,
  onClick,
  colorIcon,
  text,
  title,
  size,
  bgColor,
}: CircleButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center gap-[7px]"
    >
      <div className="flex flex-row justify-start items-center gap-[5px]">
        <div
          className={`rounded-full flex items-center justify-center bg-white`}
          style={{ width: size, height: size }}
        >
          <Icon color={colorIcon} size={sizeIcon} />
        </div>
        {text !== undefined ? <>{text}</> : <></>}
      </div>
      <p className="text-[#737373]">{title !== undefined ? title : <></>}</p>
    </button>
  );
}
