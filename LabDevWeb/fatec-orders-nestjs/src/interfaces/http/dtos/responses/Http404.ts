import { ApiProperty } from "@nestjs/swagger";

export class Http404 {
    @ApiProperty({
        description: 'Sucess (true/false)',
        type: Boolean,
        example: false,
    })
    sucess: boolean;
    @ApiProperty({
        description: 'Mensagem de erro',
        type: String,
        example: 'Registro não encontrado.',
    })
    message: string;
}