import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiKey } from '@prisma/client';
import { ApiKeysService } from './api-keys.service';

@Controller('apiKeys')
export class ApiKeysController {
  constructor(private apiKeysService: ApiKeysService) {}

  @Get()
  public getApiKeys() {
    return this.apiKeysService.getApiKeys();
  }

  @Get('user/:userId')
  async getApiKeysForUser(
    @Param('userId') userId: number
  ): Promise<ApiKey[]> {
    return this.apiKeysService.apiKeys({
        where: {userId: Number(userId)}
    })
  }

  @Get(':id')
  public getApiKeyById(
    @Param('id') id: number
  ): Promise<ApiKey | null> {
    return this.apiKeysService.getApiKey({id: Number(id)})
  }
}
