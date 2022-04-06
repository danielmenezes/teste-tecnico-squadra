import { CarregarCasoPaisRepository } from "@/data/protocols";
import { CarregarCasoPais } from "@/domain/usecases";

export class ApiCarregarCasoPais implements CarregarCasoPais {
    constructor(
        private readonly carregarCasoPaisRepository: CarregarCasoPaisRepository
    ) { }

    async carregar(): Promise<CarregarCasoPais.Resultado> {
        return await this.carregarCasoPaisRepository.carregar()
    }
}