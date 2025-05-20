import {
  Body,
  Controller,
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
import { response, Response } from 'express';
import { ProductEntityInterface } from 'src/database/entities/product.interface';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListProductsDtoResponse } from '../interfaces/http/dtos/responses/ListProductsDtoResponse';
import { CreateProductDto } from 'src/interfaces/http/dtos/requests/CreateProductDto';
import { Http400 } from 'src/interfaces/http/dtos/responses/Http400';
import { Http404 } from 'src/interfaces/http/dtos/responses/Http404';

@ApiTags("Products API's")
@Controller('product')
export class ProductController {
  constructor(
    private listProductService: ListProductService,
    private getProductByIdService: GetProductByIdService,
    private createProductService: CreateProductService,
  ) {}

  @Get()
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @ApiResponse({
    status: 200,
    description: 'List of products',
    type: ListProductsDtoResponse,
    isArray: true,
  })
  async list(): Promise<ProductEntityInterface[]> {
    const productList = await this.listProductService.execute();
    return productList;
  }

  @ApiParam({
    name: 'id',
    description: 'ID do produto',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Produto encontrado',
    type: ListProductsDtoResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado',
    type: Http404,
  })
  @Get(':id')
  async getById(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<ProductInterface> {
    const product = await this.getProductByIdService.execute(Number(id));

    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Produto não encontrado',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: product,
    });
    return product;
  }

  @Post()
  @HttpCode(201)
  @ApiBody({
    description: 'Cria um novo produto',
    type: CreateProductDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Produto criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar produto',
    type: Http400,
  })
  async create(@Body() product: CreateProductDto, @Res() res: Response) {
    const { name, value, description, brandId } = product;
    if (!(name && value && description && brandId)) {
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios.',
      });
      return;
    }
    try {
      await this.createProductService.execute(product);
    } catch (error) {
      res.status(400).json({
        sucess: false,
        message: error.message,
      });
      return;
    }
    res.send();
  }
}
