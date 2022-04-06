import { CasoPaisModel } from '@/domain/models';

export interface CarregarCasoPais {
  carregar: (parametro: CarregarCasoPais.Parametro) => Promise<CarregarCasoPais.Resultado>;
}

export namespace CarregarCasoPais {
  export type Parametro = { nomePais: string }
  export type Resultado = CasoPaisModel
}
