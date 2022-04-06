import { Module } from '@nestjs/common';

import { IndicadorModule } from './controllers/indicador/indicador.module';


@Module({
  imports: [
    IndicadorModule,
  ],
})
export class AppModule {}
