import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './clients.entity';
import { ClientsRepository } from './clients.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Clients, ClientsRepository])],
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class ClientsModule {}
