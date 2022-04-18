import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesController } from './sales/sales.controller';
import { SalesService } from './sales/sales.service';

@Module({
  imports: [],
  controllers: [AppController, SalesController],
  providers: [AppService, SalesService],
})
export class AppModule {}
