export const parseToDollar = (value: string | number) => {
  const v = value || 0;
  return (+v).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
    // minimumFractionDigits: 0
  });
};
