import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchemaForEnv } from './database/config/environment-variables';
import { PersistenceModule } from './database/persistence/persistence.module';
import { AppController } from './infra/controller/app.controller';
import { AppUsecase } from './application/usecase/app.usecase';
import { OrderController } from './infra/controller/order.controller';
import { OrderUseCase } from './application/usecase/order.usecase';
import { OrderRepository } from './infra/repository/order.repository';
import { HistoryRepository } from './infra/repository/history.repository';

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
