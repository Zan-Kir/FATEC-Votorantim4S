import { Inject, Injectable } from '@nestjs/common';
import { ProductInterface } from 'src/products/product.interface';
import { ProductEntity } from '../entities/product.entity';
 
@Injectable()
export class ProductRepository {
  constructor(
    @Inject('PRODUCT_ENTITY')
    private productEntity: typeof ProductEntity,
  ) {}
 
  async create(product: ProductInterface): Promise<void> {
    await this.productEntity.create({...product})
  }
  update() {}
  async getById(id: number): Promise<ProductInterface> {
    //const product = await this.productEntity.findByPk(id);
    const product = await this.productEntity.findOne({
      where: {
        id: id,
      },
    });
    return product;
  }
  async list(): Promise<ProductEntity[]> {
    const products = await this.productEntity.findAll();
    return products;
  }
  delete() {}
}