import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronuserModule } from './cronuser/cronuser.module';

@Module({
  imports: [CronuserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
