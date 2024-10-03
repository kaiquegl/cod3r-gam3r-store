import { CalcInstallment } from "@gstore/core";

export default function useInstallment(value: number, quantity = 12) {
  const installment = new CalcInstallment().execute(value, quantity);
  return installment;
}
