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
        {isMobile === false ? (
          <>
            <div className="h-[122px] flex justify-center items-center bg-[#EAE0D5]">
              <div className="w-[90%] 700:w-[70%] 700:max-w-[1320px] flex flex-row justify-between items-center gap-5">
                <div className="flex justify-center items-center h-24">
                  <Image
                    alt="Logo da Uniclube"
                    src="/images/Logo.png"
                    height={100}
                    width={220}
                  />
                </div>

                <div className="flex justify-center items-center h-24 w-full max-w-[53%]">
                  <Input
                    name="pesquisa"
                    placeholder="O que você gostaria hoje?"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                </div>

                <div className="flex justify-center items-center h-24 gap-[10px] 700:gap-[20px] min-w-72">
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
                    <p className="leading-[18px]">
                      <span className="font-semibold">Onde</span>
                      <br />
                      você está
                    </p>
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
                    <p className="leading-[18px]">
                      <span className="font-semibold">Faça Login</span>
                      <br />
                      ou cadastre-se
                    </p>
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
                  <p className="text-[#3F3F3F]">
                    Descontos Clienter United Natal
                  </p>
                </div>
                <p className="text-[#3F3F3F]">Venda no uniclube</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col w-full">
            <div className="h-[60px] flex justify-center items-center bg-[#EAE0D5]">
              <div className="w-[90%] 700:w-[70%] 700:max-w-[1320px] flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-5">
                  <NavBar />
                  <div className="flex justify-center items-center h-24">
                    <Image
                      alt="Logo da Uniclube"
                      src="/images/Logo.png"
                      height={60}
                      width={120}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-2">
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
            <div className="bg-[#F7F3EE] h-[40px] w-full flex justify-center items-center">
              <div className="w-[90%] 700:w-[70%] 700:max-w-[1320px]">
                <Input
                  name="pesquisa"
                  placeholder="O que você gostaria hoje?"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  h={30}
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
