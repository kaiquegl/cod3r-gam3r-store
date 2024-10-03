import type { CartItem } from "./CartItem";
import type { Product } from "../Product";

export default class Cart {
  constructor(readonly itens: CartItem[] = []) {}

  addItem(product: Product): Cart {
    const item = this.itemByProduct(product);

    if (item) return new Cart(this.changeItemQuantity(this.itens, product, 1));

    return new Cart([...this.itens, { product, quantity: 1 }]);
  }

  removeItem(product: Product) {
    const item = this.itemByProduct(product);
    if (!item) return this;

    return new Cart(this.changeItemQuantity(this.itens, product, -1));
  }

  removeProduct(product: Product) {
    const item = this.itemByProduct(product);
    if (!item) return this;

    return new Cart(this.itens.filter((item) => item.product.id !== product.id));
  }

  clear() {
    return new Cart();
  }

  get itemsQuantity() {
    return this.itens.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }

  get totalValue() {
    return this.itens.map((item) => item.product.promotionPrice * item.quantity).reduce((a, b) => a + b, 0);
  }

  get totalValueWithoutDiscount() {
    return this.itens.map((item) => item.product.initialPrice * item.quantity).reduce((a, b) => a + b, 0);
  }

  private itemByProduct(product: Product): CartItem | undefined {
    return this.itens.find((item) => item.product.id === product.id);
  }

  private changeItemQuantity(itens: CartItem[], product: Product, difference: number): CartItem[] {
    return itens
      .map((i) => (i.product.id === product.id ? { ...i, quantity: i.quantity + difference } : i))
      .filter((i) => i.quantity > 0);
  }
}
