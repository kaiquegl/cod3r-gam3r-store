import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import type { Order } from "@gstore/core";
import type { OrderPrisma } from "src/order/order.prisma";

@Controller("orders")
export class OrderController {
  constructor(private readonly repo: OrderPrisma) {}

  @Post()
  async save(@Body() order: Order) {
    return this.repo.save(order);
  }

  @Get()
  async getOrderList() {
    return this.repo.get();
  }

  @Get(":id")
  async getOrderById(@Param("id") id: string) {
    return this.repo.getById(+id);
  }

  @Delete(":id")
  async deleteOrder(@Param("id") id: string) {
    return this.repo.delete(+id);
  }
}
