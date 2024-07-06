import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/infra/repository/order.repository';
import { OrderMapper } from '../mappers/order.mapper';
import { CreateOrderDTO } from 'src/infra/controller/dto/order.dto';
import { Status } from '@prisma/client';

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) { }

  async createOrder(createOrderDTO: CreateOrderDTO) {
    const order = OrderMapper.toEntity(createOrderDTO);
    const orderPrisma = OrderMapper.toPrisma(order, Status.REALIZED);
    return await this.orderRepository.save(orderPrisma);
  }
}
