import { Module } from "@nestjs/common";

import { DbModule } from "./db/db.module";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";

@Module({ imports: [DbModule, ProductModule, OrderModule] })
export class AppModule {}
