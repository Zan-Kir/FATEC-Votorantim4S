import { ApiProperty } from "@nestjs/swagger";

export class Http400 {
    @ApiProperty({
        description: 'Sucess (true/false)',
        type: Boolean,
        example: false,
    })
    sucess: boolean;
    @ApiProperty({
        description: 'Mensagem de erro',
        type: String,
        example: 'Todos campos são obrigatórios.',
    })
    message: string;
}