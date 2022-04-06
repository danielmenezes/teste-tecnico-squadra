import { CarregarMetricaVacinaRepository } from "@/data/protocols";
import { MetricaVacinaModel } from "@/domain/models";
import { CarregarMetricaVacina } from "@/domain/usecases";
import axios from 'axios'

export class MetricaVacinaRepository implements CarregarMetricaVacinaRepository {

    async carregar(): Promise<CarregarMetricaVacina.Resultado> {
        const nomePais = 'Brazil'
        const { data: dados } = await axios.get(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${nomePais}`)

        const metricaVacina: MetricaVacinaModel = {
            total_doses_aplicadas: dados['All']['administered'],
            pessoas_vacinadas: dados['All']['people_vaccinated'],
            pessoas_parcialmente_vacinada: dados['All']['people_partially_vaccinated']
        }
    
        return metricaVacina
    }

}