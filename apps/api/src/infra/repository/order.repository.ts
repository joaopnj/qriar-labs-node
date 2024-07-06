import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/persistence/prisma/prisma.service';

@Injectable()
export class OrderRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(data: any): Promise<any> {
    return await this.prismaService.order.create({data});
  };

  async list(filter: Prisma.OrderFindManyArgs): Promise<any> {
    return await this.prismaService.order.findMany(filter);
  };
}
