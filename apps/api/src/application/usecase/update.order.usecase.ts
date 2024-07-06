import { Injectable } from '@nestjs/common';
import { UpdateStatusOrderDTO } from 'src/infra/controller/dto/order.dto';
import { HistoryMapper } from '../mappers/history.mapper';
import { HistoryRepository } from 'src/infra/repository/history.repository';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UpdateOrderStatusUseCase {
  constructor(
    private readonly historyRepository: HistoryRepository,
    private readonly emmiter: EventEmitter2
  ) { }

  async updateOrderStatus(updateStatusOrderDTO: UpdateStatusOrderDTO, id: number) {
    const history = HistoryMapper.toEntity(updateStatusOrderDTO);
    const historyPrisma = HistoryMapper.toPrisma(history, id);
    const result = await this.historyRepository.save(historyPrisma);
    if(updateStatusOrderDTO.status === 'WAITING_PAYMENT') {
      console.log("Ordem em pagamento")
      this.emmiter.emit("submit-payment", id);
    }
    return result;
  }
  
}
