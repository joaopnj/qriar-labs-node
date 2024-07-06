import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/infra/repository/order.repository';

@Injectable()
export class FindOrdersUseCase {
  constructor(private readonly orderRepository: OrderRepository) { }

  async list() {
    return await this.orderRepository.list();
  }
}
