import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import type { Product } from "@gstore/core";
import type { ProductPrisma } from "./product.prisma";

@Controller("products")
export class ProductController {
  constructor(private readonly repo: ProductPrisma) {}

  @Post()
  saveProduct(@Body() product: Product): Promise<void> {
    return this.repo.save(product);
  }

  @Get()
  getProductList(): Promise<Product[]> {
    return this.repo.get();
  }

  @Get(":id")
  getProductById(@Param("id") id: string): Promise<Product> {
    return this.repo.getById(+id);
  }

  @Delete(":id")
  deleteProductById(@Param("id") id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
