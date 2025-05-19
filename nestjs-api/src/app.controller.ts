import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller MVC - Model View Controller
// Dentro deste controller posso criar as rotas e endpoints usando verbos http
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
