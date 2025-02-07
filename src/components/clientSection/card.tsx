import { JSX } from "react";
import Image from "next/image";

import { cardProps } from "@/types/components/card";
import { PriceLocale } from "@/utils/functions/priceLocale";

export function Card({
  image,
  tittle,
  promotion,
  price,
  seller,
  description,
  linkSeller,
}: cardProps): JSX.Element {
  return (
    <div className="max-w-[250px] w-full min-h-[370px] max-h-[490px] bg-white rounded-md shadow-xl cursor-pointer ">
      <Image
        src={image}
        alt="imagem da capa do projeto"
        width={250}
        height={192}
        className="transition duration-500 hover:brightness-50"
      />

      <div className="px-4 py-4 flex flex-col justify-end bg-blue-200">
        {tittle !== undefined ? (
          <h1 className="text-[#3F3F3F] text-sm 990:text-lg h-[60px] mb-1 overflow-hidden text-ellipsis ">
            {tittle}
          </h1>
        ) : (
          <></>
        )}

        <div className="flex flex-col justify-end ">
          <div className="text-xs 990:text-sm leading-none mb-[2px] flex flex-row items-center gap-[7px]">
            {promotion !== undefined ? (
              <>
                <span className="text-[#737373] line-through m-0">
                  R$ {PriceLocale(promotion.oldPrice)}
                </span>
                <span className="text-[#CC0A12] text-[12px]">
                  {promotion.promotionValue}% OFF
                </span>
              </>
            ) : (
              <>
                <span className="text-[#737373] line-through m-0">
                  A partir de
                </span>
              </>
            )}
          </div>
          <span className="font-bold text-lg 990:text-2xl text-[#3F3F3F] leading-none mb-[10px]">
            R$ {PriceLocale(price)}
          </span>
        </div>

        <div className="mb-[15px] h-[72px] overflow-auto">
          <p className="text-[#737373]">
            {description.creditCard !== undefined ? (
              <>
                <span className="font-semibold">
                  {description.creditCard.installment}x R${" "}
                  {PriceLocale(description.creditCard.value)} sem juros
                </span>{" "}
                no cartão{" "}
              </>
            ) : (
              <></>
            )}

            {description.pix !== undefined ? (
              <>
                ou{" "}
                <span className="font-semibold">
                  {description.pix} R$ {PriceLocale(description.pix)} no pix
                </span>{" "}
              </>
            ) : (
              <></>
            )}
          </p>
        </div>

        <div>
          <p className="text-xs 990:text-sm text-[#737373] overflow-hidden text-ellipsis whitespace-nowrap">
            Vendido por{" "}
            <a className="underline" href={linkSeller}>
              {seller}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
