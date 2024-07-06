import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/infra/repository/order.repository';
import { OrderMapper } from '../mappers/order.mapper';
import { UpdateStatusOrderDTO } from 'src/infra/controller/dto/order.dto';
import { HistoryMapper } from '../mappers/history.mapper';
import { HistoryRepository } from 'src/infra/repository/history.repository';

@Injectable()
export class UpdateOrderStatusUseCase {
  constructor(private readonly historyRepository: HistoryRepository) { }

  async updateOrderStatus(updateStatusOrderDTO: UpdateStatusOrderDTO, id: number) {
    const history = HistoryMapper.toEntity(updateStatusOrderDTO);
    const historyPrisma = HistoryMapper.toPrisma(history, id);
    return await this.historyRepository.save(historyPrisma);
  }
}
