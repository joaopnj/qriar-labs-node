import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/repository/order.repository';

@Injectable()
export class OrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) { }


}
