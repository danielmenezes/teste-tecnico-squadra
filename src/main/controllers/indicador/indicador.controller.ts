import { controllerAdapter } from '@/main/adapters'
import {
  ConstruirCarregarIndicadorController,
} from '@/main/factories/controllers'

import {
  Controller,
  Get,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Indicadores')
@Controller('indicadores')
export class IndicadorController {
  constructor(
    private readonly construirCarregarIndicadorController: ConstruirCarregarIndicadorController,

  ) {}

  @Get()
  @UsePipes(new ValidationPipe({whitelist:true}))
  async carregarIndicadores(
    @Res() response: any
  ){
    const resultado = await controllerAdapter(
      this.construirCarregarIndicadorController.fabricar()
    )
    return response.json(resultado)
  }

}
