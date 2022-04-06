import {
  ConstruirCarregarIndicadorController,
} from '@/main/factories/controllers';
import { FactoryModule } from '@/main/factories/usecases/factory.module';
import { Module } from '@nestjs/common';
import { IndicadorController } from './indicador.controller';

@Module({
  imports: [FactoryModule],
  controllers: [IndicadorController],
  providers: [
    ConstruirCarregarIndicadorController,
  ],
})
export class IndicadorModule {}
