import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProductsModule, DatabaseModule], //importa outros modulos
  controllers: [], // inclui controladores
  providers: [], // inclui serviços e repositórios
  exports: [], // exporta recursos para outros módulos
})

export class AppModule {}
