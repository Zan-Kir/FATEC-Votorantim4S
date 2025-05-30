import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = 80;
  const app = await NestFactory.create(AppModule);
 
  const config = new DocumentBuilder()
    .setTitle('FATEC Orders')
    .setDescription('Fatec Votorantim Orders API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(port);
}
bootstrap();
