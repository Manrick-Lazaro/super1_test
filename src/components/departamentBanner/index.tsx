"use client";

import { JSX, useState, useEffect } from "react";
import { BiBookBookmark } from "react-icons/bi";
import {
  PiHeartbeatThin,
  PiTShirtThin,
  PiBabyThin,
  PiSunglassesThin,
} from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiSofaLine } from "react-icons/ri";
import { LiaDumbbellSolid, LiaKeySolid } from "react-icons/lia";
import { GiMirrorMirror } from "react-icons/gi";
import "swiper/css";

import { CircleButton } from "../circleButton";

export function DepartamentBanner(): JSX.Element {
  const [size, setSize] = useState(96);
  const [iconSize, setIconSize] = useState(46);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1000) {
        setSize(60);
        setIconSize(26);
      } else {
        setSize(90);
        setIconSize(46);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={10}
        breakpoints={{
          50: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          500: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1300: {
            slidesPerView: 7,
            spaceBetween: 8,
          },
          1400: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={BiBookBookmark}
            sizeIcon={iconSize}
            size={size}
            title="Arte, Papelaria e Armarinhos"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={PiHeartbeatThin}
            sizeIcon={iconSize}
            size={size}
            title="Saúde"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={PiTShirtThin}
            sizeIcon={iconSize}
            size={size}
            title="Calçados, Roupas e Bolsas"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={PiBabyThin}
            sizeIcon={iconSize}
            size={size}
            title="Bebês"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={RiSofaLine}
            sizeIcon={iconSize}
            size={size}
            title="Casa, Móveis e Decoração"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={LiaDumbbellSolid}
            sizeIcon={iconSize}
            size={size}
            title="Esportes e Fitness"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={GiMirrorMirror}
            sizeIcon={iconSize}
            size={size}
            title="Beleza e Cuidado Pessoal"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={LiaKeySolid}
            sizeIcon={iconSize}
            size={size}
            title="Imóveis"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={PiSunglassesThin}
            sizeIcon={iconSize}
            size={size}
            title="Óculos"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            sizeIcon={iconSize}
            size={size}
            title="Serviços"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
