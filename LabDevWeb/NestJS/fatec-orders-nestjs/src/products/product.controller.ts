import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { ProductInterface } from './product.interface';
import { CreateProductService } from './services/create-product.service';
import { UpdateProductService } from './services/update-product.service';
import { Response } from 'express';
import { DeleteProductService } from './services/delete-product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly listProductService: ListProductService,
    private readonly getProductByIdService: GetProductByIdService,
    private readonly createProductService: CreateProductService,
    private readonly updateProductService: UpdateProductService,
    private readonly deleteProductService: DeleteProductService,
  ) {}

  @Get()
  list(): ProductInterface[] {
    const productList = this.listProductService.execute();
    return productList;
  }

  @Get(':id')
  getById(@Param('id') id: string): ProductInterface {
    const product = this.getProductByIdService.execute(Number(id));
    return product;
  }

  @Post()
  @HttpCode(201)
  create(@Body() product: ProductInterface, @Res() res: Response): void {
    const { name, brand, value, weight } = product;
    if (!(name && value && weight && brand)) {
      res.status(400).json({
        success: false,
        message: 'Todos campos são obrigatórios',
      });
      return;
    }
    this.createProductService.execute(product);
    res.status(201).json({
      success: true,
      message: 'Produto criado com sucesso',
      product: product,
    });
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() product: ProductInterface): void {
    this.updateProductService.execute(Number(id), product);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.deleteProductService.execute(Number(id));
  }
}
