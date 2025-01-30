import { Module } from '@nestjs/common';
import { CronuserService } from './cronuser.service';
import { CronuserController } from './cronuser.controller';

@Module({
  controllers: [CronuserController],
  providers: [CronuserService],
})
export class CronuserModule {}
