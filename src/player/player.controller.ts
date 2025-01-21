import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    try {
      return this.playerService.create(createPlayerDto);
    }
    catch {
      throw new Error("nem létezik ilyen id-jú csapat")
    }
  }

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const player = await this.playerService.findOne(+id);
    if (player == null){
      throw new NotFoundException("nincs ilyen id-val rendelkező játékos")
    }
    return player;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    try {
      const updatedPlayer = await this.playerService.update(+id, updatePlayerDto);
      return updatedPlayer;
    }
    catch {
      throw new NotFoundException("nem sikerült felülírni")
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const playerToRemove = await this.playerService.remove(+id);
      return playerToRemove;
    }
    catch {
      throw new NotFoundException("nem sikerült törölni")
    }
  }
}
