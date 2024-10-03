import type { Installment } from "./Type";

export const MAX_QUANTITY_INSTALLMENT = 12;
export const INSTALLMENT_INTEREST_MONTHLY = 0.0167;

export default class CalcInstallment {
  execute(
    value: number,
    quantity = MAX_QUANTITY_INSTALLMENT,
    installmentInterest = INSTALLMENT_INTEREST_MONTHLY
  ): Installment {
    if (quantity < 2 || quantity > MAX_QUANTITY_INSTALLMENT) {
      throw new Error("Invalid quantity of installments");
    }

    const totalWithInterest = this.calcCompoundInterest(value, installmentInterest, quantity);

    return {
      installmentInterest,
      installmentQuantity: quantity,
      totalPrice: this.withTwoDecimals(totalWithInterest),
      installmentPrice: this.withTwoDecimals(totalWithInterest / quantity),
    };
  }

  private calcCompoundInterest(totalPrice: number, monthlyFee: number, quantity: number): number {
    return totalPrice * (1 + monthlyFee) ** quantity;
  }

  private withTwoDecimals(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
