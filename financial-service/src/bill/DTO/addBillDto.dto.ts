import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength,isDate, IsDate, IsMongoId, IsNumber, IsPositive, IsIn, IsDateString, IsOptional, isNotEmpty } from 'class-validator';
import { type } from 'os';

export class addBillDto {

  @IsNotEmpty({message:" useremail can not be empty"})
  useremail: string;
  
  @IsString()
  location ;

  @IsNumber()
  numberOfRooms; 
  
  @IsNumber()
  roomPrice;
  
  @IsString()
  guestHouseId;

  @IsDate()
  startDate;
  
  @Type(()=> Date)
  endDate;
}