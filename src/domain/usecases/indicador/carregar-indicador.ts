import { IndicadorModel } from '@/domain/models';

export interface CarregarIndicador {
  carregar: () => Promise<CarregarIndicador.Resultado>;
}

export namespace CarregarIndicador {
  export type Resultado = IndicadorModel
}
