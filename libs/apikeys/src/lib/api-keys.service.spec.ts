import { Test } from '@nestjs/testing';
import { ApiKeysService } from './api-keys.service';

describe('ApiKeysService', () => {
  let service: ApiKeysService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiKeysService],
    }).compile();

    service = module.get(ApiKeysService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
