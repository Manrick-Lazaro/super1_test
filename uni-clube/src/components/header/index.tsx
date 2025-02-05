import Image from "next/image";
import { JSX } from "react";

export function Header(): JSX.Element {
  return (
    <header className="grid grid-cols-3">
      <div className="flex justify-center items-center h-24 bg-red-200">
        <Image
          alt="Logo dae Uniclube"
          src="/images/Logo.png"
          height={47}
          width={122}
        />
      </div>
    </header>
  );
}
