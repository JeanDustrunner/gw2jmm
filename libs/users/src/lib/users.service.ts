import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient;

@Injectable()
export class UsersService {
    public getUsers(): Promise<User[]> {
        return prisma.user.findMany();
    }
}
