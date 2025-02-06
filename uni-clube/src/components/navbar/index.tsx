import Image from "next/image";
import { useState, JSX } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export function NavBar(): JSX.Element {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu(): void {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <nav className="flex flex-row items-center">
      <button
        className="flex items-center"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <Image src="/svg/icons/menu.svg" alt="Menu" width={19} height={13} />

        <p className="bold text-[#3F3F3F] ml-[10px] mr-[8px]">Departamentos</p>

        {menuIsOpen ? (
          <FaChevronUp className="w-7 h-13 text-[#F47920]" />
        ) : (
          <FaChevronDown className="w-7 h-13 text-[#F47920]" />
        )}
      </button>

      <div className="border-r-[2px] border-[#EAE0D5] mx-4 rounded-full w-1 h-[30px]"></div>
    </nav>
  );
}
