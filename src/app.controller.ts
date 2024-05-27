import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloPmd(): string {
    return this.appService.getHello();
  }

  @Post()
  postPmd(): string {
    return this.appService.postPmd()
  }

}
