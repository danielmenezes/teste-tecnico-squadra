import { EstadoModel } from "../estado/estado";
import { MetricaVacinaModel } from "../metrica-vacina";
import { PaisModel } from "../pais/pais";

export interface IndicadorModel {
  pais: PaisModel & MetricaVacinaModel
  estados: EstadoModel[]
}

