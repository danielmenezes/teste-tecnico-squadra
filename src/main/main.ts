import { NestFactory } from '@nestjs/core'
import * as config from 'config'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const serverConfig = config.get('server')
  const app = await NestFactory.create(AppModule)

  const port = process.env.PORT || serverConfig.port

  const options = new DocumentBuilder()
    .setTitle('Documentação Api')
    .setDescription('Documentação da api de Indicadores do Covid 19')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)

  app.enableCors()
  app.listen(port)
}

bootstrap()