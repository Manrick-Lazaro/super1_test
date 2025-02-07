import { JSX } from "react";
import { Card } from "./card";

export function ClientSection(): JSX.Element {
  return (
    <div className="relative w-[98%] min-h-0 rounded-md mt-[30px]">
      <div className="bg-gradient-to-b from-[#00995D] via-[#00995D] to-[#59B650] rounded-md h-fit">
        <div
          className="bg-center bg-cover bg-no-repeat rounded-md "
          style={{ backgroundImage: "url('/images/background.png')" }}
        >
          <section className="flex flex-col py-[40px] px-[50px] rounded-md">
            <h1 className="text-white text-[30px] mb-[30px]">
              Descontos cliente <span className="font-bold">Unimed Natal</span>
            </h1>

            <div className="grid grid-cols-1 700:grid-cols-2 900:grid-cols-3 1200:grid-cols-4 1400:grid-cols-5 gap-4 ">
              <div className="col-span-1">
                <Card
                  image={"/images/artesanato-potiguar 1.png"}
                  tittle="Garrafa de areia colorida"
                  promotion={{ oldPrice: 32.99, promotionValue: 10 }}
                  price={29.61}
                  description={{
                    creditCard: { installment: 3, value: 6.33 },
                    pix: 18.5,
                  }}
                  seller="Sr. Castanha"
                />
              </div>

              <div className="col-span-1">
                <Card
                  image={"/images/csm_artesanato1_01_abb2c534a4 1.png"}
                  tittle="Bolsas variadas de fibra de Açaí"
                  price={49.9}
                  description={{
                    creditCard: { installment: 2, value: 24.95 },
                    pix: 38.5,
                  }}
                  seller="Patrícia Arte"
                />
              </div>

              <div className="col-span-1">
                <Card
                  image={"/images/23e81a3aa263874c983c96c7cbae3468 1.png"}
                  tittle="Galinha e pintinhos de barro a mão"
                  promotion={{ oldPrice: 32.99, promotionValue: 10 }}
                  price={14.9}
                  description={{
                    pix: 13.0,
                  }}
                  seller="Patrícia Arte"
                />
              </div>

              <div className="col-span-1">
                <Card
                  image={"/images/foto11 1.png"}
                  tittle="Panelas de barro de São Gonçado do Amarante"
                  price={29.9}
                  description={{
                    creditCard: { installment: 2, value: 16.95 },
                    pix: 23.9,
                  }}
                  seller="Sebastião Salgado"
                />
              </div>

              <div className="col-span-1">
                <Card
                  image={
                    "/images/original-546f2c52e986cd7f11f4935c98ba29d3 1.png"
                  }
                  tittle="Artesanato de bonecas negras feitas com argila a mão"
                  price={9.9}
                  description={{
                    creditCard: { installment: 2, value: 7.45 },
                  }}
                  seller="Manu Instimates"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
