import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDTO, UpdateStatusOrderDTO } from './dto/order.dto';
import { CreateOrderUseCase } from 'src/application/usecase/create.order.usecase';
import { UpdateOrderStatusUseCase } from 'src/application/usecase/update.order.usecase';
import { FindOrdersUseCase } from 'src/application/usecase/find.orders.usecase';

@Controller('order')
export class OrderController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase,
    private readonly updateOrderStatusUseCase: UpdateOrderStatusUseCase,
    private readonly findOrdersUseCase: FindOrdersUseCase

  ) { }

  @Post()
  async save(@Body() createOrderDTO: CreateOrderDTO): Promise<{ message: string }> {
    return await this.createOrderUseCase.createOrder(createOrderDTO);
  }

  @Patch('update-status/:id')
  async updateStatus(@Body() updateStatusOrderDTO: UpdateStatusOrderDTO, @Param('id') id: number): Promise<{ message: string }> {
    return await this.updateOrderStatusUseCase.updateOrderStatus(updateStatusOrderDTO, id);
  }

  @Get()
  async findAll(): Promise<{ message: string }> {
    return await this.findOrdersUseCase.list();
  }
}
