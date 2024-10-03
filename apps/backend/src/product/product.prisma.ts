import { Injectable } from "@nestjs/common";

import type { Product } from "@gstore/core";
import type { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProductPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async save(product: Product): Promise<void> {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }

  async get(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products as Product[];
  }

  async getById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return (product as Product) ?? null;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
