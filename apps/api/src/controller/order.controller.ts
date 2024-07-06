import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderRepository } from 'src/repository/order.repository';
import { CreateOrderDTO } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderRepository: OrderRepository) {}

  @Post()
  async save(@Body() createOrderDTO: CreateOrderDTO): Promise<{ message: string }> {
    return this.orderRepository.save(createOrderDTO);
  }
}
