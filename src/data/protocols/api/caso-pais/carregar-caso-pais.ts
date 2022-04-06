import { CarregarCasoPais } from "@/domain/usecases";

export interface CarregarCasoPaisRepository {
    carregar: (parametro: CarregarCasoPaisRepository.Parametro) => Promise<CarregarCasoPaisRepository.Resultado>
}

export namespace CarregarCasoPaisRepository {
    export type Parametro = CarregarCasoPais.Parametro
    export type Resultado = CarregarCasoPais.Resultado
}