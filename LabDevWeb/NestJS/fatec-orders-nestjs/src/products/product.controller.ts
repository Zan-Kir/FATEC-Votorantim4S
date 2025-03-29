import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { ProductInterface } from './product.interface';
import { CreateProductService } from './services/create-product.service';
import { UpdateProductService } from './services/update-product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly listProductService: ListProductService,
    private readonly getProductByIdService: GetProductByIdService,
    private readonly createProductService: CreateProductService,
    private readonly updateProductService: UpdateProductService,
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
  create(@Body() product: ProductInterface): void {
    this.createProductService.execute(product);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() product: ProductInterface): void {
    this.updateProductService.execute(Number(id), product);
  }
}
