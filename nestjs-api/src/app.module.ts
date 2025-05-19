import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';

@Module({
  // Decorator @Module() é usado para definir as metadata do módulo.
  imports: [AssetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
