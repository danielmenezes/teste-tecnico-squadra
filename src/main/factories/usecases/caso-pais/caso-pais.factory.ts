import { CarregarCasoPaisRepository } from "@/data/protocols";
import { ApiCarregarCasoPais } from "@/data/usecases";
import { CasoPaisRepository } from "@/infra/api/repositories";
import { Provider } from "@nestjs/common";
import { CARREGAR_CASO_PAIS_FACTORY } from "../../providers";

export const carregarCasoPaisFactory: Provider = {
    provide: CARREGAR_CASO_PAIS_FACTORY,
    useFactory: (casoPaisRepository: CasoPaisRepository): CarregarCasoPaisRepository => {
        return new ApiCarregarCasoPais(casoPaisRepository)
    },
    inject: [CasoPaisRepository]
}