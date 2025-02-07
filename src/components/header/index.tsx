"use client";

import Image from "next/image";
import { JSX, useState, useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";

import { Input } from "../input";
import { NavBar } from "../navbar";

export function Header(): JSX.Element {
  const [search, setSearch] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="sticky top-0 z-50 ">
      <div className="h-[8px] w-full bg-[#F47920]"></div>
      <header>
        <div className="h-[122px] flex justify-center items-center bg-[#EAE0D5]">
          <div className="wrapper flex flex-row justify-evenly items-center gap-[30px]">
            <div className="flex justify-center items-center h-24">
              <Image
                alt="Logo dae Uniclube"
                src="/images/Logo.png"
                height={100}
                width={220}
              />
            </div>

            {!isMobile && (
              <div className="flex justify-center items-center h-24 max-w-[620px] w-[620px]">
                <Input
                  name="pesquisa"
                  placeholder="O que você gostaria hoje?"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>
            )}

            <div className="flex justify-center items-center h-24 gap-[20px] 700:gap-[30px] min-w-72">
              <div className="flex flex-row cursor-pointer justify-center items-center gap-[5px] group">
                <div
                  className={`rounded-full  flex items-center justify-center max-w-[36px] max-h-[36px] cursor-pointer bg-[#F7F3EE] group-hover:bg-[#F47920] transition-colors duration-300`}
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <FiMapPin
                      className="text-[#F47920] group-hover:text-white transition-colors duration-300"
                      size={20}
                    />
                  </div>
                </div>
                {!isMobile ? (
                  <p className="leading-[18px] whitespace-nowrap">
                    <span className="font-semibold">Onde</span>
                    <br />
                    você está
                  </p>
                ) : (
                  <></>
                )}
              </div>

              <div className="flex flex-row cursor-pointer justify-center items-center gap-[5px] group">
                <div
                  className={`rounded-full  flex items-center justify-center w-[36px] h-[36px] cursor-pointer bg-[#F7F3EE] group-hover:bg-[#F47920] transition-colors duration-300`}
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <BiUser
                      className="text-[#F47920] group-hover:text-white transition-colors duration-300"
                      size={20}
                    />
                  </div>
                </div>
                {!isMobile ? (
                  <p className="leading-[18px] whitespace-nowrap">
                    <span className="font-semibold">Faça Login</span>
                    <br />
                    ou cadastre-se
                  </p>
                ) : (
                  <></>
                )}
              </div>

              <div className="flex flex-row cursor-pointer justify-center items-center gap-[5px] group">
                <div
                  className={`rounded-full  flex items-center justify-center w-[36px] h-[36px] cursor-pointer bg-[#F7F3EE] group-hover:bg-[#F47920] transition-colors duration-300`}
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <LuShoppingCart
                      className="text-[#F47920] group-hover:text-white transition-colors duration-300"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F3EE] h-[60px] w-full flex justify-center">
          <div className="wrapper flex flex-row items-center justify-between px-4 h-full mx-[279px]">
            <div className="flex flex-row items-center">
              <NavBar />
              <p className="text-[#3F3F3F]">Descontos Clienter United Natal</p>
            </div>
            <p className="text-[#3F3F3F]">Venda no uniclube</p>
          </div>
        </div>
      </header>
    </div>
  );
}
