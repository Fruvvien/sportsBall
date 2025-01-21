import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreatePlayerDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    goalCount: number

    @IsNotEmpty()
    @IsString()
    birthDate: string
    
    @IsNotEmpty()
    @IsNumber()
    teamId: number
}
