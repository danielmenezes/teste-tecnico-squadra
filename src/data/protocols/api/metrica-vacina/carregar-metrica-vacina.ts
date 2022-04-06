import { CarregarMetricaVacina } from "@/domain/usecases";

export interface CarregarMetricaVacinaRepository {
    carregar: (parametro: CarregarMetricaVacinaRepository.Parametro) => Promise<CarregarMetricaVacinaRepository.Resultado>
}

export namespace CarregarMetricaVacinaRepository {
    export type Parametro = CarregarMetricaVacina.Parametro
    export type Resultado = CarregarMetricaVacina.Resultado
}