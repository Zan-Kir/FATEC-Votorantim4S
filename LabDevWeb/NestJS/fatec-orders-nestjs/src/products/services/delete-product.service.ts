import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';

@Injectable()
export class DeleteProductService {
  constructor(private productRepository: ProductRepository) {}
  execute(id: number): boolean {
    return this.productRepository.delete(id);
  }
}
