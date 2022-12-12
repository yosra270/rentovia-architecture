import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Host } from './entities/host.entity';

@Injectable()
export class HostService {
  constructor(
    @InjectRepository(Host)
    private hostRepository: Repository<Host>,
  ) {}
  async create(reservation: Host) {
    return await this.hostRepository.save(reservation);
  }

  async findAll() {
    return await this.hostRepository.find();
  }

  async findOne(id: number) {
    return await this.hostRepository.findOneBy({ id });
  }

  async findPrice(id: number) {
    const resp = await this.hostRepository.findOneBy({ id });
    return { roomPrice: resp.roomPrice };
  }

  async update(id: number, data: any) {
    return await this.hostRepository
      .createQueryBuilder()
      .update()
      .set({
        ...data,
      })
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    return await this.hostRepository.delete(id);
  }
}
