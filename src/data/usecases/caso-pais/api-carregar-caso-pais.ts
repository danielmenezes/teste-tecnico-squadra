import { CarregarCasoPaisRepository } from "@/data/protocols";
import { CarregarCasoPais } from "@/domain/usecases";

export class ApiCarregarCasoPais implements CarregarCasoPais {
    constructor(
        private readonly carregarCasoPaisRepository: CarregarCasoPaisRepository
    ) { }

    async carregar(parametro: CarregarCasoPais.Parametro): Promise<CarregarCasoPais.Resultado> {
        return await this.carregarCasoPaisRepository.carregar(parametro);
    }
}