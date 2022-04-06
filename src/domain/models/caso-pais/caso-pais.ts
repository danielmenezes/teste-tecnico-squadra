import { EstadoModel } from "../estado"
import { PaisModel } from "../pais"

export interface CasoPaisModel {
    pais: PaisModel
    estados: EstadoModel[]
}