import { CarregarCasoPais, CarregarMetricaVacina } from "@/domain/usecases";
import { CarregarIndicadorController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { Inject } from "@nestjs/common";
import { CARREGAR_CASO_PAIS_FACTORY, CARREGAR_METRICA_VACINA_FACTORY } from "../../providers";
import { LogControllerDecoratorFactory } from "../log-controller-decorator.factory";

export class ConstruirCarregarIndicadorController {
    constructor(
        @Inject(CARREGAR_CASO_PAIS_FACTORY)
        private readonly carregarCasoPais: CarregarCasoPais,
        @Inject(CARREGAR_METRICA_VACINA_FACTORY)
        private readonly carregarMetricaVacina: CarregarMetricaVacina
    ) { }

    public fabricar(): Controller {
        const controller = new CarregarIndicadorController(
            this.carregarCasoPais,
            this.carregarMetricaVacina,
        )
        return new LogControllerDecoratorFactory(controller)
    }
}