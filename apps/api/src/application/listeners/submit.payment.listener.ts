import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { HistoryEntity } from 'src/domain/entity/history.entity';
import { HistoryRepository } from 'src/infra/repository/history.repository';
import { HistoryMapper } from '../mappers/history.mapper';
import { resolve } from 'path';

@Injectable()
export class SubmitPaymentListener {
  constructor(private readonly historyRepository: HistoryRepository) { }

  @OnEvent('submit-payment')
  async submitPayment(id: number) {
    await this.delay(2 * 60 * 1000);
    const history = HistoryMapper.toPrisma({status: "PAYMENT_APROVED"} as HistoryEntity, id);
    await this.historyRepository.save(history);
  }

  private delay(time: number): Promise<void>{
    return new Promise(resolve => setTimeout(resolve, time));
  }
}
