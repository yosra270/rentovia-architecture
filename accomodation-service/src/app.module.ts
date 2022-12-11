import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Host } from './host/entities/host.entity';
import { HostController } from './host/host.controller';
import { HostService } from './host/host.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rentovia_accomodation',
      entities: [Host],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Host]),
  ],
  controllers: [AppController, HostController],
  providers: [AppService, HostService],
})
export class AppModule {}
