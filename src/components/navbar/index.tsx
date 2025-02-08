"use client";

import Image from "next/image";
import { useState, JSX, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { DropdownMenu } from "../dropdownMenu";

export function NavBar(): JSX.Element {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function toggleMenu(): void {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <nav className="flex flex-row items-center">
        <button
          className="flex items-center"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <Image src="/svg/icons/menu.svg" alt="Menu" width={19} height={13} />
          {isMobile === false ? (
            <>
              <p className="bold text-[#3F3F3F] ml-[10px] mr-[8px]">
                Departamentos
              </p>
              {menuIsOpen ? (
                <FaChevronUp className="w-7 h-13 text-[#F47920]" />
              ) : (
                <FaChevronDown className="w-7 h-13 text-[#F47920]" />
              )}
            </>
          ) : (
            <></>
          )}
        </button>
      </nav>

      <DropdownMenu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </>
  );
}
