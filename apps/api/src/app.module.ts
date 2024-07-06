import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchemaForEnv } from './database/config/environment-variables';
import { PersistenceModule } from './database/persistence/persistence.module';
import { AppController } from './infra/controller/app.controller';
import { AppUsecase } from './application/usecase/app.usecase';
import { OrderController } from './infra/controller/order.controller';
import { OrderRepository } from './infra/repository/order.repository';
import { HistoryRepository } from './infra/repository/history.repository';
import { CreateOrderUseCase } from './application/usecase/create.order.usecase';
import { UpdateOrderStatusUseCase } from './application/usecase/update.order.usecase';
import { FindOrdersUseCase } from './application/usecase/find.orders.usecase';
import { SubmitPaymentListener } from './application/listeners/submit.payment.listener';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validationSchemaForEnv,
    }),
    PersistenceModule,
    EventEmitterModule.forRoot()
  ],
  controllers: [
    AppController,
    OrderController
  ],
  providers: [
    AppUsecase,
    OrderRepository,
    CreateOrderUseCase,
    UpdateOrderStatusUseCase,
    FindOrdersUseCase,
    HistoryRepository,
    SubmitPaymentListener
  ],
})
export class AppModule {}
