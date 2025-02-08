"use client";

import type InputProps from "../../types/components/input";
import { JSX } from "react";
import { IoSearch } from "react-icons/io5";

export function Input(props: InputProps): JSX.Element {
  return (
    <div className={`relative w-[${props.w}] h-[${props.h}]`}>
      <input
        {...props}
        className="rounded-[30px]  w-full focus:outline-none focus:ring-1 pl-5 drop-shadow-md pr-12"
        style={{ height: props.h ?? 54, width: props.w ?? "100%" }}
      />
      <IoSearch
        className={`mb-2 text-gray-400 w-6 h-6 absolute right-5 top-1/2 transform -translate-y-1/2 `}
      />
    </div>
  );
}
