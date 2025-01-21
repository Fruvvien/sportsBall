import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamService {
  constructor(private readonly db: PrismaService){}


  create(createTeamDto: CreateTeamDto) {
    return this.db.team.create({data: createTeamDto});
  }

  findAll() {
    return this.db.team.findMany();
  }

  findOne(id: number) {
    return this.db.team.findUnique({where: {id: id}});
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.db.team.update({where: {id: id}, data: updateTeamDto});
  }


  addPlayerToTeam(teamId: number, playerId: number) {
      return this.db.team.update({
        where: {id: teamId},
        data: {
          players: {
            connect: {id: playerId}
          }},

      })

  }

  returnAllPlayer(){
    return this.db.team.findMany({
      include: {
        players: true
      }
    });
  }

  remove(id: number) {
    return this.db.team.delete({where: {id: id}});
  }
}
