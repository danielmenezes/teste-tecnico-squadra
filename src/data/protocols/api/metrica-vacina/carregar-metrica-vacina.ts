import { CarregarMetricaVacina } from "@/domain/usecases";

export interface CarregarMetricaVacinaRepository {
    carregar: () => Promise<CarregarMetricaVacinaRepository.Resultado>
}

export namespace CarregarMetricaVacinaRepository {
    export type Resultado = CarregarMetricaVacina.Resultado
}