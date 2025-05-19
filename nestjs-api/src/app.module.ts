import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';

@Module({
  // Decorator @Module() é usado para definir as metadata do módulo.
  controllers: [AppController],
  providers: [AppService],
  imports: [AssetsModule],
})
export class AppModule {}
