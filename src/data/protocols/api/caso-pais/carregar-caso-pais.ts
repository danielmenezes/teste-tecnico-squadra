import { CarregarCasoPais } from "@/domain/usecases";

export interface CarregarCasoPaisRepository {
    carregar: () => Promise<CarregarCasoPaisRepository.Resultado>
}

export namespace CarregarCasoPaisRepository {
    export type Resultado = CarregarCasoPais.Resultado
}