"use client";

import Image from "next/image";
import { JSX, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";

import { Input } from "../input";
import { CircleButton } from "../circleButton";

export function Header(): JSX.Element {
  const [search, setSearch] = useState("");
  const textCep = (
    <p className="text-left leading-[18px]">
      <span className="font-semibold">Onde</span>
      <br />
      você está?
    </p>
  );
  const textLogin = (
    <p className="text-left leading-[18px]">
      <span className="font-semibold">Faça Login</span>
      <br />
      ou cadastre-se
    </p>
  );

  function cepActionButton(): void {}

  return (
    <div>
      <div className="h-[8px] w-full bg-[#F47920]"></div>
      <header className="h-[122px] flex justify-center items-center bg-[#EAE0D5]">
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
          <div className="flex justify-center items-center h-24">
            <CircleButton
              icon={FiMapPin}
              sizeIcon={20}
              size={36}
              text={textCep}
              onClick={cepActionButton}
              bgColor="#F7F3EE"
              colorIcon="#F47920"
            />
          </div>
          <div className="flex justify-center items-center h-24">
            <CircleButton
              icon={BiUser}
              sizeIcon={20}
              size={36}
              text={textLogin}
              onClick={cepActionButton}
              bgColor="#F7F3EE"
              colorIcon="#F47920"
            />
          </div>
          <div className="flex justify-center items-center h-24">
            <CircleButton
              icon={LuShoppingCart}
              sizeIcon={20}
              size={36}
              onClick={cepActionButton}
              bgColor="#F7F3EE"
              colorIcon="#F47920"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
