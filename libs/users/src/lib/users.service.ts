import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client'
import { PrismaService } from '../../../../apps/api/src/prisma.service'

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService){}
    public getUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    public getUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput
        })
    }

    public createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data
        });
    }

    public updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
      }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
          data,
          where,
        });
    }
    
    public deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where,
        });
    }
    
}
