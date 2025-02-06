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
              Descontos cliente <span className="bold">Unimed Natal</span>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
