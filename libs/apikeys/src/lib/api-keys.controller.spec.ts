import { Test } from '@nestjs/testing';
import { ApiKeysController } from './api-keys.controller';
import { ApiKeysService } from './api-keys.service';

describe('ApiKeysController', () => {
  let controller: ApiKeysController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiKeysService],
      controllers: [ApiKeysController],
    }).compile();

    controller = module.get(ApiKeysController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
