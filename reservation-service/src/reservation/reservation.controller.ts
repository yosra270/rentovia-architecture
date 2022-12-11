import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './entities/reservation.entity';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  async create(@Body() reservation: Reservation) {
    return await this.reservationService.create(reservation);
  }

  @Get()
  async findAll() {
    return await this.reservationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.reservationService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() reservation: Reservation) {
    return await this.reservationService.update(+id, reservation);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.reservationService.remove(+id);
  }
}
