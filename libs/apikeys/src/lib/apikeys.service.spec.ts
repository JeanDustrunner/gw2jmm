import { Test } from '@nestjs/testing';
import { ApikeysService } from './apikeys.service';

describe('ApikeysService', () => {
  let service: ApikeysService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApikeysService],
    }).compile();

    service = module.get(ApikeysService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
