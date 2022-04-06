import { MetricaVacinaModel } from '@/domain/models';

export interface CarregarMetricaVacina {
  carregar: () => Promise<CarregarMetricaVacina.Resultado>;
}

export namespace CarregarMetricaVacina {
  export type Resultado = MetricaVacinaModel
}
