import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillModule } from './bill/bill.module';

@Module({
  imports: [BillModule, MongooseModule.forRoot('mongodb+srv://Souheil:Testing123!@cluster0.w3zp8db.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
