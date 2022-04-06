import { Controller, HttpResponse } from '@/presentation/protocols';
import { LogControllerDecorator } from '@/main/decorators/log-controller.decorator';

export class LogControllerDecoratorFactory {
  constructor(private readonly controller: Controller) { }

  async lidar(requisicao: any): Promise<HttpResponse> {
    const controller = new LogControllerDecorator(this.controller);
    return await controller.lidar(requisicao);
  }
}