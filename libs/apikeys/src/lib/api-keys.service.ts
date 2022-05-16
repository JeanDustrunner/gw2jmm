import { Injectable } from '@nestjs/common';
import { PrismaClient, ApiKey, Prisma } from '@prisma/client' 
import { PrismaService } from '../../../../apps/api/src/prisma.service'


@Injectable()
export class ApiKeysService {

    constructor(private prisma: PrismaService) {}

    public getApiKeys(): Promise<ApiKey[]> {
        return this.prisma.apiKey.findMany()
    }

    async apiKeys(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ApiKeyWhereUniqueInput;
        where?: Prisma.ApiKeyWhereInput;
        orderBy?: Prisma.ApiKeyOrderByWithRelationInput;
    }): Promise<ApiKey[]>{
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.apiKey.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    public getApiKey(
        ApiKeyWhereUniqueInput: Prisma.ApiKeyWhereUniqueInput
    ): Promise<ApiKey | null> {
        return this.prisma.apiKey.findUnique({
            where: ApiKeyWhereUniqueInput
        })
    }

    public createApiKey(
        data: Prisma.ApiKeyCreateInput
    ): Promise<ApiKey> {
        return this.prisma.apiKey.create({
            data
        });
    }

    public deleteApiKey(
        where: Prisma.ApiKeyWhereUniqueInput
    ): Promise<ApiKey> {
        return this.prisma.apiKey.delete({
            where,
        });
    }
    
}
