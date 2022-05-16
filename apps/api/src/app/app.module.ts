import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService, UsersController } from '@gw2jmm/users';
import { ApiKeysService, ApiKeysController } from '@gw2jmm/apiKeys';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    ApiKeysController
  ],
  providers: [
    AppService,
    UsersService,
    ApiKeysService,
    PrismaService
  ],
})
export class AppModule {}
