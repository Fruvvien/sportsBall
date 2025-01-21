import { IsNumber, IsString } from "class-validator"

export class CreatePlayerDto {

    @IsString()
    name: string
    @IsNumber()
    goalCount: number
    @IsString()
    birthDate: string
    @IsNumber()
    teamId: number
}
