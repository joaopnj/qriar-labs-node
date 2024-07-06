import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderMapper } from 'src/application/mappers/order.mapper';
import { CreateOrderDTO } from './dto/order.dto';
import { OrderUseCase } from 'src/application/usecase/order.usecase';

@Controller('order')
export class OrderController {
  constructor(private readonly orderUseCase: OrderUseCase) {}

  @Post()
  async save(@Body() createOrderDTO: CreateOrderDTO): Promise<{ message: string }> {
    return await this.orderUseCase.createOrder(createOrderDTO);
  }
}
