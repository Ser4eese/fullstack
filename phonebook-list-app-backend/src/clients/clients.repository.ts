import { Repository, EntityRepository } from 'typeorm';
import { Clients } from './clients.entity';
import { CreateClientDTO } from './dto/creatclients.dto';

/*@EntityRepository(Clients)
export class ClientsRepository extends Repository<Clients> {
  createClient = async (createClientDTO: CreateClientDTO) => {
    return await this.save(createClientDTO);
  };
}*/

@EntityRepository(Clients)
export class ClientsRepository extends Repository<Clients> {

  public async createClients(
     createClientDTO: CreateClientDTO,
  ): Promise<Clients> {
    const { first_name, address, last_name, phone, email, datereg} = createClientDTO;

    const client = new Clients();
    client.first_name = first_name;
    client.address = address;
    client.last_name = last_name;
    client.phone = phone;
    client.email = email;
    client.datereg = datereg;


    await this.save(createClientDTO);
    return client;
  }

  public async addClient(
    createClientDTO: CreateClientDTO,
    addClient: Clients,
  ): Promise<Clients> {
    const { first_name, address, last_name, phone, email, datereg } = createClientDTO;

    addClient.first_name = first_name;
    addClient.address = address;
    addClient.last_name = last_name;
    addClient.phone = phone;
    addClient.email = email;
    addClient.datereg = datereg;
    await this.save(createClientDTO);
    return addClient;
  }
}