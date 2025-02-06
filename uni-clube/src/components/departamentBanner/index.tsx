import { JSX } from "react";
import { CircleButton } from "../circleButton";
import { BiBookBookmark } from "react-icons/bi";
import {
  PiHeartbeatThin,
  PiTShirtThin,
  PiBabyThin,
  PiSunglassesThin,
} from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";
import { LiaDumbbellSolid, LiaKeySolid } from "react-icons/lia";
import { GiMirrorMirror } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export function DepartamentBanner(): JSX.Element {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={10}
        breakpoints={{
          400: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 6,
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
            sizeIcon={46}
            size={96}
            title="Arte, Papelaria e Armarinhos"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={PiHeartbeatThin}
            sizeIcon={46}
            size={96}
            title="Saúde"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={PiTShirtThin}
            sizeIcon={46}
            size={96}
            title="Calçados, Roupas e Bolsas"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={PiBabyThin}
            sizeIcon={46}
            size={96}
            title="Bebês"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={RiSofaLine}
            sizeIcon={46}
            size={96}
            title="Casa, Móveis e Decoração"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={LiaDumbbellSolid}
            sizeIcon={46}
            size={96}
            title="Esportes e Fitness"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={GiMirrorMirror}
            sizeIcon={46}
            size={96}
            title="Beleza e Cuidado Pessoal"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={LiaKeySolid}
            sizeIcon={46}
            size={96}
            title="Imóveis"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            icon={PiSunglassesThin}
            sizeIcon={46}
            size={96}
            title="Óculos"
            bgColor="#EAE0D5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CircleButton
            onClick={() => {}}
            sizeIcon={46}
            size={96}
            title="Serviços"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
