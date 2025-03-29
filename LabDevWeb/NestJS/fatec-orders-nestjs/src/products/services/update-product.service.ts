import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { ProductInterface } from '../product.interface';

@Injectable()
export class UpdateProductService {
  constructor(private productRepository: ProductRepository) {}

  execute(id: number, product: ProductInterface): void {
    this.productRepository.update(id, product);
  }
}
