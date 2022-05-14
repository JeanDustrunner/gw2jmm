import { Controller, Get } from '@nestjs/common';
import { ApikeysService } from './apikeys.service';

@Controller('apikeys')
export class ApikeysController {
  constructor(private apikeysService: ApikeysService) {}

  @Get()
  public getApiKeys() {
    return this.apikeysService.getApiKeys();
  }
}
