import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
      @IsNotEmpty()
      @IsString()
      name: string
  
      @IsNotEmpty()
      @IsNumber()
      goalCount: number
  
      @IsNotEmpty()
      @IsString()
      birthDate: string


}
