export default function currencyFormatter(value: number, locale = "pt-BR", currency = "BRL") {
  return (value ?? 0).toLocaleString(locale, {
    style: "currency",
    currency,
  });
}
