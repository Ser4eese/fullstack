import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from './clients.entity';
import { CreateClientDTO } from './dto/creatclients.dto';
//import { ClientsRepository } from './clients.repository';

@Injectable()
export class ClientsService {
    constructor(@InjectRepository(Clients) private readonly repo:Repository<Clients>){}

    async getAllClients(): Promise<Clients[]>{
        const clients = await this.repo.find();
        return clients;
    }

    async getClient(clientID): Promise<Clients>{
        const clientOne = await this.repo.findOne(clientID);
        return clientOne;
    }

    async addClient(createClientDTO: CreateClientDTO): Promise<Clients> {
        return await this.repo.save(createClientDTO);
    }
    /*async updateClient(clientID, createClientDTO: CreateClientDTO): Promise<Clients> {
        let updatedClient = await this.repo.find(clientID);
         if (!updatedClient) {
        throw new NotFoundException('Client not found');
        }
        return this.ClientsRepository.addClient(createClientDTO, updatedClient);
        }*/

    async deleteClient(clientID): Promise<any> {
        const deletedCustomer = await this.repo.findOne(clientID);
        await this.repo.remove(deletedCustomer);
        return deletedCustomer;
    }
}
