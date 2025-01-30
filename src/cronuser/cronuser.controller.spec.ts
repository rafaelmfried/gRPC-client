import { Test, TestingModule } from '@nestjs/testing';
import { CronuserController } from './cronuser.controller';
import { CronuserService } from './cronuser.service';

describe('CronuserController', () => {
  let controller: CronuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CronuserController],
      providers: [CronuserService],
    }).compile();

    controller = module.get<CronuserController>(CronuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
