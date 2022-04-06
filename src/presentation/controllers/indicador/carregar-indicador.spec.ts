import { CarregarIndicadorController } from './carregar-indicador'
import { CasoPaisRepository } from '../../../infra/api/repositories/caso-pais'
import { MetricaVacinaRepository } from '../../../infra/api/repositories/metrica-vacina'

jest.mock('../../../infra/api/repositories/caso-pais')
jest.mock('../../../infra/api/repositories/metrica-vacina')

describe('Testes CarregarIndicadorController', () => {

    let carregarIndicadorController: CarregarIndicadorController
    let indicador: any

    beforeEach(async () => {
        const casoPaisRepository = new CasoPaisRepository()
        const metricaVacinaRepository = new MetricaVacinaRepository()
        
        casoPaisRepository.carregar = jest.fn().mockReturnValueOnce({
            pais: {
                nome: "Nome_pais",
                expectativa_vida: 60.9,
                total_casos_confirmados: 300,
                numero_populacao: 600,
                total_obitos: 3,
            },
            estados: [
                {
                    nome: "estado_a",
                    confirmados: 100,
                    obitos: 1,
                    ultima_atualizacao: "02-02-2022 03:33:33"
                },
                {
                    nome: "estado_b",
                    confirmados: 200,
                    obitos: 2,
                    ultima_atualizacao: "02-02-2022 03:33:33"
                }
            ]
        })

        metricaVacinaRepository.carregar = jest.fn().mockReturnValueOnce({
            total_doses_aplicadas: 100,
		    pessoas_vacinadas: 80,
		    pessoas_parcialmente_vacinadas: 10
        })
        
        carregarIndicadorController = new CarregarIndicadorController(
            casoPaisRepository,
            metricaVacinaRepository
        )

        indicador = await carregarIndicadorController.lidar()
    })

    it('O retorno de CarregarIndicadorController.lidar() deve conter todas as propriedades', () => {
        expect(indicador).toMatchObject({
            pais: {
                nome: "Nome_pais",
                expectativa_vida: 60.9,
                total_casos_confirmados: 300,
                numero_populacao: 600,
                total_obitos: 3,
                total_doses_aplicadas: 100,
		        pessoas_vacinadas: 80,
		        pessoas_parcialmente_vacinadas: 10
            },
            estados: [
                {
                    nome: "estado_a",
                    confirmados: 100,
                    obitos: 1,
                    ultima_atualizacao: "02-02-2022 03:33:33"
                },
                {
                    nome: "estado_b",
                    confirmados: 200,
                    obitos: 2,
                    ultima_atualizacao: "02-02-2022 03:33:33"
                }
            ]
        })
    })

})