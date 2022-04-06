import { CarregarMetricaVacinaRepository } from "@/data/protocols";
import { ApiCarregarMetricaVacina } from "@/data/usecases";
import { MetricaVacinaRepository } from "@/infra/api/repositories";
import { Provider } from "@nestjs/common";
import { CARREGAR_METRICA_VACINA_FACTORY } from "../../providers";

export const carregarMetricaVacinaFactory: Provider = {
    provide: CARREGAR_METRICA_VACINA_FACTORY,
    useFactory: (metricaVacinaRepository: MetricaVacinaRepository): CarregarMetricaVacinaRepository => {
        return new ApiCarregarMetricaVacina(metricaVacinaRepository)
    },
    inject: [MetricaVacinaRepository]
}