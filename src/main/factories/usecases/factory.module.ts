import { Module } from '@nestjs/common'
import { CasoPaisRepository, MetricaVacinaRepository } from '@/infra/api/repositories'
import { carregarCasoPaisFactory, carregarMetricaVacinaFactory } from '@/main/factories/usecases'

@Module({
  providers: [
    CasoPaisRepository,
    MetricaVacinaRepository,

    carregarCasoPaisFactory,
    carregarMetricaVacinaFactory,
  ],
  exports: [
  
    carregarCasoPaisFactory,
    carregarMetricaVacinaFactory,
  ],
})
export class FactoryModule {}
