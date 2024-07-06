import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/persistence/prisma/prisma.service';

@Injectable()
export class HistoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(data: any): Promise<any> {
    return await this.prismaService.history.create({data});
  };
}
