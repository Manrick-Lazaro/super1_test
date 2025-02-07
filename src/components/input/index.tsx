"use client";

import type InputProps from "../../types/components/input";
import { JSX } from "react";
import { IoSearch } from "react-icons/io5";

export function Input(props: InputProps): JSX.Element {
  return (
    <div className="relative w-full">
      <input
        {...props}
        className="rounded-[30px] h-[54px] w-full focus:outline-none focus:ring-1 pl-5 drop-shadow-md"
      />
      <IoSearch className="mb-2 text-gray-400 w-6 h-6 absolute right-5 top-4 " />
    </div>
  );
}
