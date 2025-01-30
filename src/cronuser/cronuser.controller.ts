import { Body, Controller, Get } from '@nestjs/common';
import { CronuserService, UserRequest } from './cronuser.service';

@Controller('cronuser')
export class CronuserController {
  constructor(private readonly cronuserService: CronuserService) {}

  @Get()
  async getUser(@Body() userRequest: UserRequest) {
    console.log('User Request: ', userRequest);
    return await this.cronuserService.getUser(userRequest);
  }
}
