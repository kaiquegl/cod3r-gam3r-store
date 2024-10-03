import { Injectable } from "@nestjs/common";

import type { Order } from "@gstore/core";
import type { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class OrderPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async get(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany();
    return orders as any;
  }

  async getById(id: number): Promise<Order> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: { product: { select: { id: true, name: true } } },
        },
        delivery: true,
      },
    });
    return order as any;
  }

  async save(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: {
        data: order.data,
        status: order.status,
        totalValue: order.totalValue,
        paymentMethod: order.paymentMethod,
        delivery: { create: { ...order.delivery } },
        items: {
          create: order.items.map((item) => ({
            productId: item.product.id,
            unityPrice: item.unityPrice,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) return;
    await this.prisma.$transaction([
      this.prisma.orderItem.deleteMany({ where: { orderId: id } }),
      this.prisma.order.delete({ where: { id } }),
      this.prisma.orderDelivery.delete({ where: { id: order.deliveryId } }),
    ]);
  }
}
