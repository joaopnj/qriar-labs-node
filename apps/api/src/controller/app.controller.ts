import { Controller, Get } from '@nestjs/common';
import { AppUsecase } from 'src/usecase/app.usecase';

@Controller()
export class AppController {
  constructor(private readonly appUseCase: AppUsecase) {}

  @Get()
  async getHello(): Promise<{ message: string }> {
    return await this.appUseCase.getHello();
  }
}
