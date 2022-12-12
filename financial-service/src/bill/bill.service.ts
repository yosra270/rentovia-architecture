import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/generic/generic.service';
import { Bill, BillDocument } from './bill.schema';
import { addBillDto } from './DTO/addBillDto.dto';

@Injectable()
export class BillService extends GenericService<BillDocument> {

    constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument> ) {
        super(billModel) ;
      }

      async createBill(bill: object ): Promise<Bill> {
        const newBill = await  this.create(bill) ; 
        return  newBill ; 
      }

}

