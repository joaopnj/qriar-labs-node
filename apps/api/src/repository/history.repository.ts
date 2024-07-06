import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/persistence/prisma/prisma.service';

@Injectable()
export class HistoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(data: any): Promise<any> {
    return await this.prismaService.history.create(data);
  };
}
