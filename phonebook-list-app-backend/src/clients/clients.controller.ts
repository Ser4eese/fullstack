import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateClientDTO } from './dto/creatclients.dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientService: ClientsService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    addClient(@Body() createClientDto: CreateClientDTO) {
    return this.clientService.addClient(createClientDto);
    }
  
    @Get()
    getAllClients() {
         return this.clientService.getAllClients();
    }

    @Get(':id')
    getClient(@Param('id') id: string) {
        return this.clientService.getClient(id);
    }

   /* @Put(':id')
    update(@Param('id') id: string) {
        return ;
    }*/

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.clientService.deleteClient(id);
    }

}
