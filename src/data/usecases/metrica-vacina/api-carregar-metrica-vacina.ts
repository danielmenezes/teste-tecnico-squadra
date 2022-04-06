import { CarregarMetricaVacinaRepository } from "@/data/protocols";
import { CarregarMetricaVacina } from "@/domain/usecases";

export class ApiCarregarMetricaVacina implements CarregarMetricaVacina {
    constructor(
        private readonly carregarMetricaVacinaRepository: CarregarMetricaVacinaRepository
    ) { }

    async carregar(parametro: CarregarMetricaVacina.Parametro): Promise<CarregarMetricaVacina.Resultado> {
        return await this.carregarMetricaVacinaRepository.carregar(parametro);
    }
}