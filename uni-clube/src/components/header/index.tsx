"use client";

import Image from "next/image";
import { JSX, useState } from "react";
import { Input } from "../input";

export function Header(): JSX.Element {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="h-[8px] w-full bg-[#F47920]"></div>
      <header className="h-[122px] bg-[#EAE0D5]">
        <div className="wrapper flex flex-row justify-center items-center gap-[30px] ">
          <div className="flex justify-center items-center h-24">
            <Image
              alt="Logo dae Uniclube"
              src="/images/Logo.png"
              height={100}
              width={200}
            />
          </div>
          <div className="flex justify-center items-center h-24 max-w-[572px] w-[572px]">
            <Input
              name="pesquisa"
              placeholder="O que você gostaria hoje?"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        </div>
        <div className="flex justify-center items-center h-24"></div>
      </header>
    </div>
  );
}
