import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillController } from './bill.controller';
import { Bill, BillSchema } from './bill.schema';
import { BillService } from './bill.service';

@Module({
  controllers: [BillController],imports:[MongooseModule.forFeature([{name: Bill.name, schema: BillSchema},])],
  providers: [BillService]
})
export class BillModule {}
