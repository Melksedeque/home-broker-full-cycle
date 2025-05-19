import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  // Decorator @Module() é usado para definir as metadata do módulo.
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/nest?authSource=admin&directConnection=true',
    ),
    AssetsModule,
    WalletsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
