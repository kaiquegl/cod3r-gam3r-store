import { Module } from "@nestjs/common";

import { DbModule } from "src/db/db.module";
import { OrderPrisma } from "./order.prisma";
import { OrderController } from "./order.controller";

@Module({
  imports: [DbModule],
  providers: [OrderPrisma],
  controllers: [OrderController],
})
export class OrderModule {}
