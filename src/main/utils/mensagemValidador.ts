export class MensagemValidador {
  static vazio(campo: string) {
    return `${campo} não pode estar vazio`;
  }

  static numero(campo: string) {
    return `${campo} deve ser um número`;
  }

  static inteiro(campo: string) {
    return `${campo} deve ser um inteiro`;
  }

  static lista(campo: string) {
    return `${campo} deve ser um array`;
  }

  static string(campo: string) {
    return `${campo} deve ser uma string`;
  }

  static objetoVazio(campo: string) {
    return `${campo} não pode ser um objeto vazio`;
  }

  static listaVazia(campo: string) {
    return `${campo} não pode ser uma lista vazio`;
  }

  static tamanhoMaximo(campo: string, tamanho: number) {
    return `${campo} deve ter no máximo ${tamanho} caracteres`;
  }

  static tamanhoMinimo(campo: string, tamanho: number) {
    return `${campo} deve ter no mínimo ${tamanho} caracteres`;
  }

  static maiorOuIgualA(campo: string, tamanho: number) {
    return `${campo} deve ser maior ou igual a ${tamanho}`;
  }

  static menorOuIgualA(campo: string, tamanho: number) {
    return `${campo} deve ser menor ou igual a ${tamanho}`;
  }

  static enumTipo(campo: string) {
    return `${campo} precisa estar dentro dos valores permitidos`;
  }

  static valoresPermitidosPorCampo(campo: string, valores: any) {
    return `${campo} precisa estar dentro dos valores permitidos (${Object.values(valores)})`;
  }

  static data(campo: string) {
    return `${campo} precisa ser uma data valida`;
  }

  static arrayDeNumeros(campo: string) {
    return `${campo} precisa ser um array de numeros`;
  }

  static arrayDeInteiros(campo: string) {
    return `${campo} precisa ser um array de inteiros`;
  }

  static email(campo: string) {
    return `${campo} deve ser um email válido`;
  }

  static boolean(campo: string) {
    return `${campo} deve ser verdadeiro ou falso`;
  }
}
