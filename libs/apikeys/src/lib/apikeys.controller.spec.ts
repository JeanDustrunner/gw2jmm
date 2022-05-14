import { Test } from '@nestjs/testing';
import { ApikeysController } from './apikeys.controller';
import { ApikeysService } from './apikeys.service';

describe('ApikeysController', () => {
  let controller: ApikeysController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApikeysService],
      controllers: [ApikeysController],
    }).compile();

    controller = module.get(ApikeysController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
