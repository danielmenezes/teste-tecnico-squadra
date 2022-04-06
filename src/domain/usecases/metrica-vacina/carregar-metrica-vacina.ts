import { MetricaVacinaModel } from '@/domain/models';

export interface CarregarMetricaVacina {
  carregar: (parametro: CarregarMetricaVacina.Parametro) => Promise<CarregarMetricaVacina.Resultado>;
}

export namespace CarregarMetricaVacina {
  export type Parametro = { nomePais: string }
  export type Resultado = MetricaVacinaModel
}
