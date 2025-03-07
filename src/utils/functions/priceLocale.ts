export const PriceLocale = (price: number): string => {
  const formattedPrice = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  return formattedPrice;
};
