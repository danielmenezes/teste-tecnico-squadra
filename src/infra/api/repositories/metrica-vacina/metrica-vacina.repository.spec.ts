import { MetricaVacinaRepository } from './metrica-vacina.repository'
import axios from 'axios'
jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('Testes de MetricaVacinaRepository', () => {

    let metricaVacinaRepository: MetricaVacinaRepository
    let metricaVacina: any

    beforeEach(async () => {
        const mockResposta = { 
            data: {
                "All": {
                    "administered": 100,
                    "people_vaccinated": 80,
                    "people_partially_vaccinated": 10,
                }
            }
        }

        mockAxios.get.mockResolvedValueOnce(mockResposta)
        metricaVacinaRepository = new MetricaVacinaRepository()
        metricaVacina = await metricaVacinaRepository.carregar({ nomePais: 'Brazil' })
    })

    it('O retorno de MetricaVacinaRepository deve conter todas as propriedades', () => {
        expect(metricaVacina).toMatchObject({
            total_doses_aplicadas: 100,
		    pessoas_vacinadas: 80,
		    pessoas_parcialmente_vacinadas: 10
        })
    })

    
}) 