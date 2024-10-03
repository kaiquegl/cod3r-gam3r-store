import type { Status } from "./Status";
import type { OrderItem } from "./OrderItem";
import type { DeliveryOrder } from "./DeliveryOrder";
import type { PaymentMethod } from "./PaymentMethod";

export type Order = {
  id: number;
  data: Date;
  status: Status;
  items: OrderItem[];
  totalValue: number;
  delivery: DeliveryOrder;
  paymentMethod: PaymentMethod;
};
