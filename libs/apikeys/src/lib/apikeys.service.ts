import { Injectable } from '@nestjs/common';
import { PrismaClient, APIKey } from '@prisma/client' 

const prisma = new PrismaClient;

@Injectable()
export class ApikeysService {
    public getApiKeys(): Promise<APIKey[]> {
        return prisma.aPIKey.findMany()
    }
}
