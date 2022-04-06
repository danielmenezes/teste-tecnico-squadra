import { Validacao } from '@/presentation/protocols';

export class ComposicaoValidacao implements Validacao {
  constructor(private readonly validacoes: Validacao[]) {}

  validador(input: any): Error {
    for (const validation of this.validacoes) {
      const error = validation.validador(input);
      if (error) {
        return error;
      }
    }
  }
}
