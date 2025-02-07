export type cardProps = {
  image: string;
  tittle?: string;
  promotion?: { oldPrice: number; promotionValue: number };
  price: number;
  description: {
    creditCard?: { installment: number; value: number };
    pix?: number;
  };
  seller: string;
  linkSeller?: string;
};
