import { ApiProperty } from '@nestjs/swagger';

export class ListProductsDtoResponse {
  @ApiProperty({
    description: 'ID do produto',
    type: Number,
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome do produto',
    type: String,
    example: 'Banana',
  })
  name: string;

  @ApiProperty({
    description: 'Valor do produto',
    type: Number,
    example: 100.0,
  })
  value: number;

  @ApiProperty({
    description: 'Descrição do produto',
    type: String,
    example: 'Banana maçã',
  })
  description: string;

  @ApiProperty({
    description: 'ID da marca do produto',
    type: Number,
    example: 1,
  })
  brandId: number;
}
