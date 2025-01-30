import { Test, TestingModule } from '@nestjs/testing';
import { CronuserService } from './cronuser.service';

describe('CronuserService', () => {
  let service: CronuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CronuserService],
    }).compile();

    service = module.get<CronuserService>(CronuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
