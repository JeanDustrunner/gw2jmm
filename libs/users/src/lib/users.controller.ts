import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, ApiKey } from '@prisma/client'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':email')
  public getUserByEmail(
    @Param('email') email: string
  ): Promise<User | null> {
    return this.usersService.getUser({email: String(email)})
  }

  @Get('id/:id')
  public getUserById(
    @Param('id') id: number
  ): Promise<User | null> {
    return this.usersService.getUser({id: Number(id)})
  }

  @Post('create')
  public createUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<User> {
    return this.usersService.createUser(userData);
  }

  @Put('update/:id')
  public updateUser(
    @Body() userData: {
      id: number;
      name?: string;
      email?: string;
      activeKeyId?: number;
      apiKeys?: ApiKey[];
    }
  ): Promise<User> {
    return this.usersService.updateUser({
      where: {id: Number(userData.id)},
      data: userData
    })
  }
}
