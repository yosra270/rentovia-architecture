import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Host } from './entities/host.entity';
import { HostService } from './host.service';

@Controller('host')
export class HostController {
  constructor(private readonly hostService: HostService) {}

  @Post()
  async create(@Body() host: Host) {
    return await this.hostService.create(host);
  }

  @Get()
  async findAll() {
    return await this.hostService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hostService.findOne(+id);
  }

  @Get('price/:hostName')
  async findPrice(@Param('hostName') hostName: string) {
    return await this.hostService.findPrice(hostName);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return await this.hostService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.hostService.remove(+id);
  }
}
