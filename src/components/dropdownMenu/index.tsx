"use client";

import { JSX, useState, useEffect } from "react";
import { ExpandableList } from "../expandableList";
import { MdHomeRepairService } from "react-icons/md";

import {
  linksSaude,
  linksEstilo,
  linksDepartamentos,
} from "@/utils/consts/linksMenuDropDown";
import { CircleButton } from "../circleButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function DropdownMenu({ isOpen, onClose }: Props): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClickOnScrim = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <div
      className={`fixed inset-0  z-30 bg-black bg-opacity-50 transition-all ${
        isMobile
          ? "flex justify-start top-[110px]"
          : "flex items-start justify-center top-[190px]"
      }`}
      onClick={handleClickOnScrim}
    >
      {!isMobile && (
        <div className="bg-white rounded-xl shadow-lg max-w-[1320px] w-[70%] h-fit">
          <div className="flex flex-row justify-center p-[40px]">
            <div className="grid grid-cols-2 1200:grid-cols-3 gap-y-[40px]">
              <ExpandableList items={linksSaude} title="Saúde e bem-estar" />
              <ExpandableList items={linksEstilo} title="Estilo" />
              <ExpandableList items={linksSaude} title="Eletro" />
              <ExpandableList items={linksSaude} title="Casa" />
              <ExpandableList items={linksSaude} title="Lorem" />
              <ExpandableList items={linksSaude} title="Ipsum" />
            </div>
            <div>
              <ExpandableList
                items={linksDepartamentos}
                title="Mais Departamentos"
              />
            </div>
          </div>
          <div className="flex justify-center bg-[#FAF7F4] w-full h-[218px] p-0  ">
            <div className="max-w-[95%] w-full flex justify-start pt-12 flex-row overflow-x-auto whitespace-nowrap">
              <div className="">
                <CircleButton
                  onClick={() => {}}
                  icon={MdHomeRepairService}
                  sizeIcon={20}
                  size={90}
                  title="tittle here"
                />
              </div>
              <div className="">
                <CircleButton
                  onClick={() => {}}
                  icon={MdHomeRepairService}
                  sizeIcon={20}
                  size={90}
                  title="tittle here"
                />
              </div>
              <div className="">
                <CircleButton
                  onClick={() => {}}
                  icon={MdHomeRepairService}
                  sizeIcon={20}
                  size={90}
                  title="tittle here"
                />
              </div>
              <div className="">
                <CircleButton
                  onClick={() => {}}
                  icon={MdHomeRepairService}
                  sizeIcon={20}
                  size={90}
                  title="tittle here"
                />
              </div>
              <div className="">
                <CircleButton
                  onClick={() => {}}
                  icon={MdHomeRepairService}
                  sizeIcon={20}
                  size={90}
                  title="tittle here"
                />
              </div>
              <div className="">
                <CircleButton
                  onClick={() => {}}
                  icon={MdHomeRepairService}
                  sizeIcon={20}
                  size={90}
                  title="tittle here"
                />
              </div>
              <div className="">
                <CircleButton
                  onClick={() => {}}
                  icon={MdHomeRepairService}
                  sizeIcon={20}
                  size={90}
                  title="tittle here"
                />
              </div>
              <div className="">
                <CircleButton
                  onClick={() => {}}
                  icon={MdHomeRepairService}
                  sizeIcon={20}
                  size={90}
                  title="tittle here"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div
          className={`bg-white w-[80%] max-w-[400px] h-full shadow-lg p-6 flex flex-col fixed left-0 top-0 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="self-end text-red-500 font-bold text-xl"
            onClick={onClose}
          >
            ✕
          </button>
          <div className="flex flex-col gap-8 mt-4 overflow-y-auto">
            <ExpandableList items={linksSaude} title="Saúde e bem-estar" />
            <ExpandableList items={linksEstilo} title="Estilo" />
            <ExpandableList items={linksSaude} title="Eletro" />
            <ExpandableList items={linksSaude} title="Casa" />
            <ExpandableList items={linksSaude} title="Lorem" />
            <ExpandableList items={linksSaude} title="Ipsum" />
            <ExpandableList
              items={linksDepartamentos}
              title="Mais Departamentos"
            />
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
}
