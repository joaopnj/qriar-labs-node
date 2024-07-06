import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppUsecase } from '../../application/usecase/app.usecase';
import { PersistenceModule } from '../../database/persistence/persistence.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PersistenceModule],
      controllers: [AppController],
      providers: [AppUsecase],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await appController.getHello()).toEqual({
        message: 'Hello World',
      });
    });
  });
});
