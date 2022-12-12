import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


//don't what it does souheil
 export type BillDocument = Bill & Document;


@Schema({timestamps:true})
export class Bill {
  
  @Prop({type:String,unique:true})
  reference

  @Prop({type:String ,default:false})
  useremail; 

  @Prop({type: String ,default:false})
  location;

  @Prop({type: String ,default:false})
  guestHouseId;

  @Prop({type:Number ,default:false})
  numberOfRooms; 
  @Prop({type:Number ,default:false})
  numberOfDays; 

  @Prop({type:Number ,default:false})
  priceWithoutTax; 

  @Prop({type:Number ,default:false})
  totalPrice; 

  @Prop({type:Number ,default:false})
  taxAmount; 

  @Prop({type: Date ,default:false})
  startDate;

  @Prop({type: Date ,default:false})
  endDate; 

  @Prop({type:Boolean,default:false})
  deleted ; 

  @Prop({type:Date,default:null})
  deleted_At ; 

  @Prop({type:Number})
  roomPrice;

}
export const BillSchema = SchemaFactory.createForClass(Bill);