import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Reservation } from './reservation/entities/reservation.entity';
import { ReservationController } from './reservation/reservation.controller';
import { ReservationService } from './reservation/reservation.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rentovia_reservation',
      entities: [Reservation],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Reservation]),
  ],
  controllers: [AppController, ReservationController],
  providers: [AppService, ReservationService],
})
export class AppModule {}
