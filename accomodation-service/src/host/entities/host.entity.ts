import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Host {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hostName: string;

  @Column()
  location: string;

  @Column()
  starsNumber: number;

  @Column()
  roomPrice: number;

  @Column()
  ownerNamme: string;

  @Column()
  ownerEmail: string;
}
