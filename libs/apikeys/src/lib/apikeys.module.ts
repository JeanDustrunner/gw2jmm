import { Module } from '@nestjs/common';
import { ApikeysController } from './apikeys.controller';
import { ApikeysService } from './apikeys.service';

@Module({
  controllers: [ApikeysController],
  providers: [ApikeysService],
  exports: [ApikeysService],
})
export class ApikeysModule {}
