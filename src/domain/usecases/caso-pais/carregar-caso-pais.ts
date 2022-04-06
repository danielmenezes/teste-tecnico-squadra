import { CasoPaisModel } from '@/domain/models';

export interface CarregarCasoPais {
  carregar: () => Promise<CarregarCasoPais.Resultado>;
}

export namespace CarregarCasoPais {
  export type Resultado = CasoPaisModel
}
