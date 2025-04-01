import { Injectable } from '@nestjs/common';
import { ProductInterface } from './product.interface';

@Injectable()
export class ProductRepository {
  private products: ProductInterface[] = [];
  create(product: ProductInterface): void {
    this.products.push(product);
  }
  update(id: number, productNew: ProductInterface): ProductInterface {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw Error('Produto não encontrado!');
    Object.assign(product, productNew);
    return product;
  }
  getById(id: number): ProductInterface {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw Error('Produto não encontrado!');
    return product;
  }
  list(): ProductInterface[] {
    return this.products;
  }
  delete(id: number): boolean {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1 || productIndex > this.products.length) {
      throw new Error('Produto não encontrado!');
    }
    this.products = this.products.filter((product) => product.id !== id);
    return true;
  }
}
