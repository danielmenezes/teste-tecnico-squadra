import { CarregarMetricaVacinaRepository } from "@/data/protocols";
import { CarregarMetricaVacina } from "@/domain/usecases";

export class ApiCarregarMetricaVacina implements CarregarMetricaVacina {
    constructor(
        private readonly carregarMetricaVacinaRepository: CarregarMetricaVacinaRepository
    ) { }

    async carregar(): Promise<CarregarMetricaVacina.Resultado> {
        return await this.carregarMetricaVacinaRepository.carregar()
    }
}