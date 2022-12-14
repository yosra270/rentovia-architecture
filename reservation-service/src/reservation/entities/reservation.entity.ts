import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  emailAdress: string;

  @Column()
  guestHouseId: number;

  @Column()
  numberOfRooms: number;

  @Column()
  location: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
