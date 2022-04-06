import { IndicadorModel } from "@/domain/models";
import { CarregarCasoPais, CarregarMetricaVacina } from "@/domain/usecases";
import { serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class CarregarIndicadorController implements Controller {
    constructor(
        private readonly carregarCasoPais: CarregarCasoPais,
        private readonly carregarMetricaVacina: CarregarMetricaVacina,
    ) { }

    async lidar(): Promise<HttpResponse> {
        try {
            const casoPais = await this.carregarCasoPais.carregar()
            const metricaVacina = await this.carregarMetricaVacina.carregar()

            const indicador: IndicadorModel = {
                pais: {
                 ...casoPais.pais,
                 ...metricaVacina   
                },
                estados: casoPais.estados
            }

            return indicador
        }
        catch (erro) {
            return serverError(erro)
        }
    }
}