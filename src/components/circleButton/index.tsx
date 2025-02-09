import { JSX } from "react";

import CircleButtonProps from "@/types/components/circleButton";

export function CircleButton({
  sizeIcon,
  icon: Icon,
  onClick,
  colorIcon,
  title,
  size,
}: CircleButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-start items-center gap-[7px] w-[120px] min-h-[100px] overflow-hidden 700:w-btn-700 700:h-btn-700 990:w-btn-990 990:h-btn-990 1200:w-btn-1200 1200:h-btn-1200 1400:w-btn-1400 1400:h-btn-1400"
    >
      <div className="flex flex-row justify-center items-center gap-[5px]">
        <div
          className={`rounded-full flex items-center justify-center 990:w-[96px] 990:h-[96px] bg-[#EAE0D5] hover:bg-[#F47920] transition-colors duration-300`}
          style={{
            width: size !== undefined ? size : 60,
            height: size !== undefined ? size : 60,
          }}
        >
          {Icon && (
            <div className="group w-24 h-24 flex items-center justify-center">
              <Icon
                className={`text-[#${
                  colorIcon ? { colorIcon } : "F47920"
                }] group-hover:text-white transition-colors duration-300`}
                size={sizeIcon}
              />
            </div>
          )}
        </div>
      </div>
      <p className="text-[#737373] text-center text-xs 700:text-base">
        {title !== undefined ? <>{title}</> : <></>}
      </p>
    </button>
  );
}
