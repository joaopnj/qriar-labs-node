import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchemaForEnv } from './config/environment-variables';
import { PersistenceModule } from './persistence/persistence.module';
import { AppController } from './controller/app.controller';
import { AppUsecase } from './usecase/app.usecase';
import { OrderController } from './controller/order.controller';
import { OrderRepository } from './repository/order.repository';
import { OrderUseCase } from './usecase/order.usecase';
import { HistoryRepository } from './repository/history.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validationSchemaForEnv,
    }),
    PersistenceModule,
  ],
  controllers: [
    AppController,
    OrderController
  ],
  providers: [
    AppUsecase,
    OrderUseCase,
    OrderRepository,
    HistoryRepository
  ],
})
export class AppModule {}
