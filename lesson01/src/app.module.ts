import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BrusersController } from './brusers/brusers.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, BrusersController],
  providers: [AppService],
})
export class AppModule {}
