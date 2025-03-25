import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { ProductInterface } from '../product.interface';

@Injectable()
export class ListProductService {
  constructor(private productRepository: ProductRepository) {}
  execute(): ProductInterface[] {
    return this.productRepository.list();
  }
}
