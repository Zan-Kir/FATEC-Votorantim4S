import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule], //importa outros modulos
  controllers: [], // inclui controladores
  providers: [], // inclui serviços e repositórios
  exports: [], // exporta recursos para outros módulos
})

export class AppModule {}
