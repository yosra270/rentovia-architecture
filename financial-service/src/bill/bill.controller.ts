import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { BillService } from './bill.service';
import { addBillDto } from './DTO/addBillDto.dto';


@Controller('bill')
export class BillController {

    constructor(private readonly billService: BillService){}

    @Post()
    async addBill(@Res() response, @Body() bill:addBillDto ){
        var difference_in_times = new Date(bill.endDate).getTime() - new Date(bill.startDate).getTime()
        var difference_in_days= difference_in_times / (1000 * 3600 * 24);
        var price_Without_taxe= difference_in_days * bill.numberOfRooms * bill.roomPrice        
        var tax_percentage= 0.3
        var tax_amount = tax_percentage * price_Without_taxe 
        var total_price= price_Without_taxe + tax_amount
        var reference = randomUUID().toString();
         console.log(reference)
        const newBill = await this.billService.createBill({...bill, numberOfDays: difference_in_days, priceWithoutTax:price_Without_taxe , taxAmount:tax_amount, totalPrice: total_price,reference:reference});
        

        return response.status(HttpStatus.CREATED).json(newBill) ;    
    }


    @Get()
    async getbills(@Res() response){
        const bills= await this.billService.find({deleted:false}) ;
        return response.status(HttpStatus.OK).json(bills)
    }


    @Get("/one/:id")
    async getBillById(@Res()response , @Param("id") id : string ) {
        const bills= await this.billService.find({_id:id,deleted:false}) ;
        return response.status(HttpStatus.OK).json(bills) ;
    }
    


}
