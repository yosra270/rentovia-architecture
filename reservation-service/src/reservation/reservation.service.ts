import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}
  async create(reservation: Reservation) {
    return await this.reservationRepository.save(reservation);
  }

  async findAll() {
    return await this.reservationRepository.find();
  }

  async findOne(id: number) {
    return await this.reservationRepository.findOneBy({ id });
  }

  async update(id: number, data: any) {
    return await this.reservationRepository
      .createQueryBuilder()
      .update()
      .set({
        ...data,
      })
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    return await this.reservationRepository.delete(id);
  }
}
