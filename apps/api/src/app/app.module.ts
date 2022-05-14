import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService, UsersController } from '@gw2jmm/users';
import { ApikeysService, ApikeysController } from '@gw2jmm/apikeys';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    ApikeysController
  ],
  providers: [
    AppService,
    UsersService,
    ApikeysService
  ],
})
export class AppModule {}
