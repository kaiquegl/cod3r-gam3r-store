import { forwardRef, Module } from "@nestjs/common";

import { DbModule } from "src/db/db.module";
import { ProductPrisma } from "./product.prisma";
import { ProductController } from "./product.controller";

@Module({
  imports: [DbModule],
  providers: [ProductPrisma],
  controllers: [ProductController],
})
export class ProductModule {}
