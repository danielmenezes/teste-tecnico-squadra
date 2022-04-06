import { CarregarCasoPaisRepository } from "@/data/protocols"
import { CasoPaisModel } from "@/domain/models"
import { CarregarCasoPais } from "@/domain/usecases"
import axios from 'axios'
import * as moment from 'moment'

export class CasoPaisRepository implements CarregarCasoPaisRepository {

    async carregar(): Promise<CarregarCasoPais.Resultado> {
        const nomePais = 'Brazil'
        const { data: dados } = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${nomePais}`)

        const casoPais = {
            pais: {
                nome: nomePais,
                expectativa_vida: dados['All']['life_expectancy'],
                total_casos_confirmados: dados['All']['confirmed'],
                numero_populacao: dados['All']['population'],
                total_obitos: dados['All']['deaths'],
            },
            estados: {}
        }

        const nomesEstados = Object.keys(dados)

        nomesEstados.forEach(nome => {
            if (nome !== 'All') {
                const ultimaAtualizacao = dados[nome]['updated']
                const data = moment(ultimaAtualizacao, 'YYYY-MM-DD HH:mm:ss')
                const dataFormadata = data.format('DD-MM-YYYY HH:mm:ss')
            
                const estado = {
                    nome,
                    confirmados: dados[nome]['confirmed'],
                    obitos: dados[nome]['deaths'],
                    ultima_atualizacao: dataFormadata
                }

                casoPais.estados[nome] = estado
            }
        })
    
        return casoPais as CasoPaisModel
    }


}