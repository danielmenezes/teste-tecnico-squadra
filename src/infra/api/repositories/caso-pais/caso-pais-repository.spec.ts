import { CasoPaisRepository } from './caso-pais.repository'
import axios from 'axios'
jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('Testes de CasoPaisRepository', () => {

    let casoPaisRepository: CasoPaisRepository
    let casoPais: any

    beforeEach(async () => {
        const mockResposta = { 
            data: {
                "All": {
                  "confirmed": 300,
                  "deaths": 3,
                  "country": "Nome_pais",
                  "population": 600,
                  "life_expectancy": "60.9",
                },
                "estado_a": {
                  "confirmed": 100,
                  "deaths": 1,
                  "updated": "2022-02-02 03:33:33"
                },
                "estado_b": {
                  "confirmed": 200,
                  "deaths": 2,
                  "updated": "2022-02-02 03:33:33"
                }
            }
        }
        

        mockAxios.get.mockResolvedValueOnce(mockResposta)
        casoPaisRepository = new CasoPaisRepository()
        casoPais = await casoPaisRepository.carregar({ nomePais: '_' })
    })
    
    it('CasoPaisRepository deve retornar todos os estados', () => {
        expect(casoPais.estados.length).toBe(2)
    })

    it('O retorno de CasoPaisRepository.carregar() deve conter todas as propriedades ', () => {
        expect(casoPais).toMatchObject({
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
    })

    
}) 

